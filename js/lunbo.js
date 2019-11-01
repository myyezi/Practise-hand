 $(function(){
            var cur=0;
            var auto=null;
            var $btn=$("#diandian li");
            var $li=$("#lunbo li");
            $li.eq(0).fadeIn();
            function lunbo(){
                $btn.eq(cur).addClass("selected").siblings().removeClass("selected");
                $li.eq(cur).fadeIn(400).siblings().hide();
                cur++;
                cur=cur>=$btn.length?0:cur;
                auto=setTimeout(lunbo,2000);
            }
            lunbo();
            $btn.hover(function(){
                clearTimeout(auto);
                var index=$(this).index();
                $(this).addClass("selected").siblings().removeClass("selected");
                $li.eq(index).fadeIn(0).siblings().hide();
            },function(){
                var index=$(this).index()+1;
                cur=index;
                auto=setTimeout(lunbo,2000);
            })
         })