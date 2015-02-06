$(document).ready(function () {
    $("#menu-horizontal ul").hover(function () {
        $(this).find("ul>li").fadeToggle(500);
    });
});