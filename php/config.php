<?php
@header("content-type:text/html;charset=utf8");
@header("Access-Control-Allow-Origin:*");//cros(后台) jsonp(前端)
//链接到指定的数据库
mysql_connect("localhost:3306","root","root");
mysql_select_db("201907");
mysql_query("set character set 'utf8'");
?>