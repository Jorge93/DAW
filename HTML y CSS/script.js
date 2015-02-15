$(document).ready(function () {
    $("#menu-horizontal ul").hover(function () {
        $(this).find("ul>li").fadeIn({duration: 500, queue:false }).slideDown(800);
    }, function(){
        $(this).find("ul>li").fadeOut({ duration: 500, queue: false }).slideUp(800);
    });
});











