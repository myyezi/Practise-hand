$(window).scroll(
	function(){
		   var scrO=$(document).scrollTop(); //scrollTop兼容写法
		   var log=$(".loginbar").height();
		   var con=$(".container").height();
        if(scrO >= (log+ con+ log)){   //获取元素与最近的定位父级元素的距离offsetTop
            $("#suspension").css({
            	"display":"block",
            	"position": "fixed",
            	"left":"0",
            	"top":"0"
            })
        }else{
            $("#suspension").css({
            	"display":"none",
            	"position": ""
            });
        }
	}
)