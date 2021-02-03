//mobile menu click effect

$(function(){
    var media = window.matchMedia( '(max-width: 1023px)' );

    if(media.matches){
        // 1023 이하
        $(".nav_container > li").on('click', function() {
        //   $(".sub-menu").show();
            $(".nav_container > li").children("ul").css("display", "none");
            $(".nav_container > li").children("a").css("color", "#333");
            $(".nav_container > li").css("background-color", "#fff");
    
            $(this).children("ul").css("display", "block");
            $(this).children("a").css("color", "#fff");
            $(this).css("background-color", "#5E8CE4");
       });
    } else {
        // 1024 이상
        
    }
});