$(document).ready(function(){

  
  // 아래로 스크롤 하면 gnb 영역의 높이를 줄입니다.
  
  if (!$('body').hasClass('mapPage')) {


    if ($(window).scrollTop() > 120) {
      $('.snsTopLinks').addClass('hidden');
      $('.gnb').addClass('collapsed');
      $('body').addClass('body_has_c_gnb');
    } else {
      $('.snsTopLinks').removeClass('hidden');
      $('.gnb').removeClass('collapsed');
      $('body').removeClass('body_has_c_gnb');
    };
    $(window).scroll(function() {
        if ($(window).scrollTop() > 120) {
          $('.snsTopLinks').addClass('hidden');
          $('.gnb').addClass('collapsed');
          $('body').addClass('body_has_c_gnb');
        } else {
          $('.snsTopLinks').removeClass('hidden');
          $('.gnb').removeClass('collapsed');
          $('body').removeClass('body_has_c_gnb');
        };
    });
  };



  // 모바일 메뉴를 엽니다.
  $('.nav-toggle').click(function(e){
    $(this).toggleClass('active');
    $('body').toggleClass('showMenu');
    $('.menu').height($(window).height()-10);
    $('.showMenu .wrap').click(function(){
      $('.nav-toggle').removeClass('active');
      $('body').removeClass('showMenu');
    });    
    e.preventDefault();
  });
  
  
  
  /* map */
  
  // 지도에서 센터 상세보기 레이어의 높이를 화면의 높이와 같게 입력해둡니다.
  $('.centerDetailViewBox').height($(window).height()-95);

  // 모바일에서 지도보기를 누르면 화면을 지도로 전환합니다.
  $('.btn_mapView').click(function(e){
    $('body').addClass('showMap');
    e.preventDefault();
  });
  
  // 모바일에서 목록 보기를 누르면 지도를 다시 가리고 목록을 보여줍니다.
  $('.btn_viewList').click(function(e){
    $('body').removeClass('showMap');
    e.preventDefault();
  });
  
  // 지도의 핀을 클릭하면 해당 위치의 센터 이름을 레이어로 보여줍니다.
  $('.mapPin').click(function(e){
    $('.pinOverlay').show();
    e.preventDefault();
  });
  
  // 센터 이름 레이어와 목록에서 센터를 선택하면 센터 상세보기 화면을 엽니다.
  /*
  $('.centetList li > a, .pinOverlay a').click(function(e){
    $('.centerDetailViewBox').show();
    
    // 딛기 버튼에 이벤트
    $('.closeBtnWrap .btn_close').click(function(e){
      $('.centerDetailViewBox').hide('fast');
      e.preventDefault();
    });
    
    e.preventDefault();
  });
  */




/*
  // 서비스 선택 후 서비스 시작일 선택
  // toDo: 영업일 기준으로 날짜를 세어야 합니다.
  $('.datepicker').datepicker({
    language: 'ko',
    todayHighlight: true,
    autoclose: true,
    startDate: "+4d",
    endDate: "+15d"
  });

  */
  
});