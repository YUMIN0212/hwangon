 $(function(){
            $(".tabmenu> li").click(function(){
                $(this).addClass("on").siblings().removeClass();
            });
        });