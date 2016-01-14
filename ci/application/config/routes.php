<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	http://codeigniter.com/user_guide/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
|	$route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples:	my-controller/index	-> my_controller/index
|		my-controller/my-method	-> my_controller/my_method
*/

$route['default_controller'] = 'root';
$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;

$route['login'] =                       'registe/login';                    //로그인
$route['identify'] =                    'registe/identify';                 //비밀번호 찾기
$route['partner'] =                     'center/partner';                   //제휴 상담 요청
$route['center'] =                      'center/index';                     //센터 관리
$route['center/cal/(:num)/(:num)'] =    'center/cal/$1/$2';                 //정산-월별내역
$route['center/cal'] =                  'center/cal';                       //정산-월별내역
$route['center/used'] =                 'center/used';                      //정산-일별내역
$route['center/used/(:num)'] =          'center/used/$1';                   //정산-일별내역)
$route['center/member/(:num)'] =        'center/member/$1';                 //정산-회원이용내역)
$route['notice'] =                      'board/index';                     //고객센터-공지사항
$route['qna'] =                         'board/qna';                        //고객센터-자주 묻는 질문
$route['direct'] =                      'board/direct';                     //고객센터-1:1
 
