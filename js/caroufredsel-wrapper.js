$(function(){

        var $banner=$('.banner');

        var $banner_ul=$('.banner-img');

        var $btn=$('.banner-btn');

        var $btn_a=$btn.find('a')

        var v_width=$banner.width();
        var page=1;
        var timer=null;

        var btnClass=null;
        //var page_count=$banner_ul.find('li').length;//把这个值赋给小圆点的个数
var page_count=3;
        var banner_cir="<li class='selected' href='#'><a></a></li>";

        $banner_ul.width(3*v_width);//可能有问题

        function move(obj,classname){

                //手动及自动播放

        if(!$banner_ul.is(':animated')){

                if(classname=='prevBtn'){

                        if(page==1){

                                        //$banner_ul.animate({left:-v_width*(page_count-1)});
$banner_ul.animate({left:-v_width*(page_count-1)});
                                        page=page_count; 

                                        cirMove();

                        }

                        else{

                                        $banner_ul.animate({left:'+='+v_width},"slow");

                                        page--;

                                        cirMove();

                        }        

                }

                else{

                        if(page==page_count){

                                        $banner_ul.animate({left:0});

                                        page=1;

                                        cirMove();

                                }

                        else{

                                        $banner_ul.animate({left:'-='+v_width},"slow");

                                        page++;

                                        cirMove();

                                }

                        }

                }

        }

        function cirMove(){

                //检测page的值，使当前的page与selected的小圆点一致

                $('.banner-circle li').eq(page-1).addClass('selected')

                                                                                                .siblings().removeClass('selected');
        }

        $banner.mouseover(function(){

                $btn.css({'display':'block'});

                clearInterval(timer);

                                }).mouseout(function(){

                $btn.css({'display':'block'});                

                clearInterval(timer);

                timer=setInterval(move,1500);

                                }).trigger("mouseout");//激活自动播放



        $btn_a.mouseover(function(){

                //实现透明渐变，阻止冒泡

                        $(this).animate({opacity:0.6},'fast');

                        $btn.css({'display':'block'});

                         return false;

                }).mouseleave(function(){

                        $(this).animate({opacity:0.3},'fast');

                        $btn.css({'display':'none'});

                         return false;

                }).click(function(){

                        //手动点击清除计时器

                        btnClass=this.className;

                        clearInterval(timer);

                        timer=setInterval(move,3000);

                        move($(this),this.className);

                });

                

//      $('.banner-img li').live('click',function(){
//
//                      var index=$('.banner-img li').index(this);
//
//                      $banner_ul.animate({left:-v_width*index},'slow');
//
//                      page=index+1;
//                     
//                      cirMove();
//												
//              });

});