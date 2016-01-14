<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
<?php
if(@$this->uri->segment(2) == 'page')
{
?>
<!-- Facebook Interface -->
<meta property="og:title" content="<?php echo $page['title']?>"/>
<meta property="og:type" content="article"/>
<meta property="og:url" content="<?php echo "http://".$_SERVER["SERVER_NAME"].$_SERVER["REQUEST_URI"];?>"/>
<meta property="og:image" content="<?php echo recheck_url($page['img']);?>"/>
<meta property="og:site_name" content=""/>
<meta property="fb:admins" content=""/>
<meta property="og:description" content="<?php echo mb_substr(strip_tags($page['sub']), 0, 150)?>"/>
<!-- Facebook Interface -->
<?php
}
?>

<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>

<title>TLX inbound</title>


</head>
<?php
if(@$this->uri->segment(2) == 'page')
{
?>
<body style="overflow:hidden;">
<div class="container1" style="width: 100%;">
<div class="jumbotron1">
<?php } else {?>
<body>
<div class="container" style="margin-top: 10px;">
<div class="jumbotron">
<?php }?>