jQuery(function($){
$("div.clickykatt").mousedown(function(event){
    if (event.offsetX >= 117 && event.offsetX <= 146 && event.offsetY >= 30 && event.offsetY <= 49){
        $("div.clickykatt").css("background-position", "0px -61px");
        }
    else if (event.offsetX >= 217 && event.offsetX <= 239 && event.offsetY >= 34 && event.offsetY <= 54){
        $("div.clickykatt").css("background-position", "0px -183px");
    }
    else if (event.offsetX >= 172 && event.offsetX <= 182 && event.offsetY >= 35 && event.offsetY <= 40){
        $("div.clickykatt").css("background-position", "0px -122px");
    }
    }).click(function(){$('html, body').clearQueue().stop().animate({scrollTop:$("#moretocome").offset().top-$(window).height()+100}, 2000);});
	
$("div.clickykatt").mousedown(function(e){
    console.log(e.offsetX, e.offsetY);
});
});
