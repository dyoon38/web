
$(document).ready(function () {

    // 모바일 햄버거 메뉴 토글
    $(".hamburger-checkbox").click(function () {
        if ($(this).prop("checked") == true) {
            $(".nav_warp").css("display", "block");
        } else {
            $(".nav_warp").css("display", "");
        }
    });

    // 모바일 햄버거 메뉴 중복 방지
    $(".nav_container").click(function (){
        $(".sub-menu").not(this).prop('checked', false);  
    })
});

