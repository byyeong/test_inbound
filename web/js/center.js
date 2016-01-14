
    
	function Center(center_id, center_name, addr1, use_part
            , lat, lng){
            
        this._center_id = center_id;
        this._center_name = center_name;
        this._addr1 = addr1;
        this._use_part = use_part;
        this._lat = lat;
        this._lng = lng;
        this._keywords = null;
        this._keywords_array = null;
        
        this._keyword_matched = 0;
        this._keyword_exercise_matched = 0;
        this._type = 0;
        
        this._marker = null;
        
        this.set_prod = function(prod, cnt_type) {
            if (prod == 60 || prod == 61) {
                this._type = this._type | Center.TYPE_SINGLE;
            } else if (cnt_type == 1) {
                this._type = this._type | Center.TYPE_1PASS;
            } else if (cnt_type == 2) {
                this._type = this._type | Center.TYPE_2PASS;
            }
        }
        
        this.check_prod = function(check_type) {
            return (check_type == 0 || (this._type & check_type) != 0);
        }
        
        this.is_in = function(n,e,s,w) {
            return (this._lat > s &&
                    this._lat < n &&
                    this._lng > w &&
                    this._lng < e)
        }
        
        
        this._make_keyword = function() {
            this._keywords_array = Array();
            
            this._make_keyword_with(this._center_name);
            this._make_keyword_with(this._addr1);
            this._make_keyword_with(this._use_part);
            
            this._keywords = this._keywords_array.join(" ");
        }
        
        this._make_keyword_with = function(from) {
            candidates = from.split(" ");
            for (var i=0;i<candidates.length;i++) {
                this._keywords_array[this._keywords_array.length] = candidates[i];
            }
        }
        
		this.find = function(keyword_query) {
			if (this._keywords == null) {
                this._make_keyword();
            }

            this._keyword_matched = 0;
            this._keyword_exercise_matched = 0;
            this.distance = 0;
            
            var ret = null;
            for (var idx in keyword_query) {
                pos = -1;
                //while(true) {
                    var pos = this._keywords.indexOf(keyword_query[idx], pos+1);
                    if (pos == -1) {
                        //break;
                    } else {
                        if (is_exercise(keyword_query[idx]))
                            this._keyword_exercise_matched++;
                        else
                            this._keyword_matched++;
                            
                    }
                //}
            }
		}
        
        this.calc_weight = function() {
            var weight = 0;
            weight += this._keyword_matched * 500;
            weight += this._keyword_exercise_matched * 60;
            if (this._keyword_matched == 0 && this.distance < 500) {
                weight += (500 - this.distance);
            }
            
            if (this._keyword_matched == 0 && this._keyword_exercise_matched == 0
                    && this.distance > Center.THRESHOLD) {
                weight = -100;
            }
            
            this._weight = weight;
        }
        
        this.calc_distance = function(geo_lists) {
            var dist = Number.MAX_VALUE;
            for (var i=0;i<geo_lists.length;i++) {
                var gl = geo_lists[i].lat;
                var dist_temp = calc_distance(this._lat, this._lng, 
                        gl, geo_lists[i].lng);
                        
                if (dist_temp < dist) dist = dist_temp;
            }
            
            this.distance = dist;
            
            return dist;
        }
        
        this.to_string = function(keywords) {
            
            var cname = this._center_name;
            var addr1 = this._addr1;
            var use_part = this._use_part;

            use_part_arr = use_part.split(",");
            var use_part_arr = use_part.split(",");
            use_part = "";

            for (var i=0;i<keywords.length;i++) {
                if (keywords[i] == "") continue;
                cname = cname.split(keywords[i]).join("<span class=\"matched\">" + keywords[i] + "</span>");
                addr1 = addr1.split(keywords[i]).join("<span class=\"matched\">" + keywords[i] + "</span>");
                
                for (var j=0;j<use_part_arr.length;j++) {
                    if (use_part_arr[j].trim().indexOf(keywords[i]) > -1) {
                        if (use_part_arr[j].length > 0  &&  use_part_arr[j].substr(0,1) != "<") {
                            use_part_arr[j] = "<span class=\"matched\">" + use_part_arr[j] + "</span>";
                        }
                    }
                }
                
            }
            
            for (var j=0;j<use_part_arr.length;j++) {
                if (use_part_arr[j].length > 0  &&  use_part_arr[j].substr(0,1) != "<") {
                    use_part_arr[j] = "<span>" + use_part_arr[j] + "</span>";
                }
                use_part = use_part + use_part_arr[j];
            }
                    
            var ret = "<li id=\"center_" + this._center_id + "\" >"
                + "<a href=\"#\" onclick=\"go_center('" + this._center_id + "');return false;\">"
                + "<div class=\"responsibleImgBox\">"
                + "  <img onerror=\"this.src='/images/center_default.jpg'\" src=\"http://www.tlxpeople.co.kr/center_pic/" + this._center_id + "_1.jpg\" alt=\"\" class=\"thumbnail\">"
                + "</div>"
                + "<div class=\"info\">"
                + "  <h5>" + cname + "</h5>"
                + "  <address>" + addr1 + "</address>"
                + "  <small class=\"events\">"
                + use_part
                + "  </small>"
                + "</div>"
                + "</a>"
                + "</li>";

            return ret;
        }
        
        this.to_string_enter = function(fav) {
            
            var use_part = this._use_part;

            use_part_arr = use_part.split(",");
            var use_part_arr = use_part.split(",");
            use_part = "";

            for (var j=0;j<use_part_arr.length;j++) {
                if (use_part_arr[j].length > 0  &&  use_part_arr[j].substr(0,1) != "<") {
                    use_part_arr[j] = "<span>" + use_part_arr[j] + "</span>";
                }
                use_part = use_part + use_part_arr[j];
            }
            
            //var passes = new Array();

            var marker_type = "";
            var marker_alt = "";
            
            if ((this._type & Center.TYPE_1PASS) != 0) {
                marker_type += "_1pass";
                marker_alt = "1 PASS";
            }
            if ((this._type & Center.TYPE_2PASS) != 0) {
                marker_type += "_2pass";
                marker_alt = "2 PASS";
            }
            if ((this._type & Center.TYPE_SINGLE) != 0) {
                marker_type += "_one";
                if (marker_alt = "") {
                    marker_alt = "SINGLE";
                } else {
                    marker_alt += " / SINGLE";
                }
                
                
            }

            var ret = "            <li>"
                + "  <a href=\"#\" onclick=\"enter_center('" + this._center_id + "');return false;\">"
                + "    <div class=\"clHeading\">"
                + "      <img src=\"/images/ico_map_pin" + marker_type + "@2x.png\" alt=\"" + marker_alt + " Pass\">"
                + "      <h3>" + this._center_name + "</h3>"
                + "    </div><!-- /.clHeadding-->"
                + "    <div class=\"clBody\">"
                + "      <small class=\"events\">"
                + use_part
                + "      </small>"
                + "      <address>"
                + "        " + this._addr1
                + "      </address>";
                
            if (fav) {
                ret = ret + "      <span class=\"fav\">"
                + "        <i class=\"fa fa-heart\"></i>"
                + "      </span>";
            }
                
            ret = ret + "    </div><!-- /.clBody -->"
                + "  </a>"
                + "</li>";

            return ret;
        }        
        this.show_marker = function(map, callback) {
        
            if (this._marker != null) {
                this._marker.setMap(map);
                return this._marker;
            }

            var marker_type = "";
            
            if ((this._type & Center.TYPE_1PASS) != 0) marker_type += "_1pass";
            if ((this._type & Center.TYPE_2PASS) != 0) marker_type += "_2pass";
            if ((this._type & Center.TYPE_SINGLE) != 0) marker_type += "_one";

            
            var imageSrc = "/images/ico_map_pin" + marker_type + "@2x.png",
                    imageSize = new daum.maps.Size(27, 44),
                    imageOption = {offset: new daum.maps.Point(13, 0)}; 
                    
            var markerImage = new daum.maps.MarkerImage(imageSrc, imageSize, imageOption);
    
            var markerPosition  = new daum.maps.LatLng(this._lat, this._lng); 
            this._marker = new daum.maps.Marker({
                position: markerPosition,
                image: markerImage
            });
            this._marker.setMap(map);
            this._marker.setClickable(true);
            
            daum.maps.event.addListener(this._marker, 'click', (function(callback, center) {
					 return function() {
						callback(center);
					 }
					
                })(callback, this));	
            
            return this._marker;
         
    
        }
	}
    
    function SearchResult(center, weight) {
        this.center = center;
        this.weight = weight;
        
        this.add_weight = function(weight) {
            this.weight += weight
        }   
        
    }

    Center.TYPE_1PASS = 1;
    Center.TYPE_2PASS = 2;
    Center.TYPE_SINGLE = 4;
    Center.TYPE_ALL = Center.TYPE_1PASS | Center.TYPE_2PASS | Center.TYPE_SINGLE;
    
    Center.THRESHOLD = 65;    // 매칭이 없고, 거리가 이 이상이면 무시

    Center.list = new Object();
    Center.count = 0;
    Center.keys = new Array();
    
    Center.find = function(k_arr) {
        for (var i=0; i < Center.count; i++) {
            Center.list[Center.keys[i]].find(k_arr);
            
        }
    };
    
    
        