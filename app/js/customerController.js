/**
 * Created by arlex on 2017/10/20.
 *
 */
//我们的客户界面的初始化
var customerController = function(){
    //菜单栏设置
    function menuConfig(){
        $("header").children("a").map(function () {
            $(this).removeClass("menu");
            $(this).addClass("menu");
        })
        $("#customer-menu").removeClass("menu");
        $(".process-container").remove();
        var process = $("<div class='process-container'> <div class='process-line'></div></div>");
        process.appendTo($("#customer-menu"));
    }

    function showPage(){
        $("#container > div").hide();
        $("#customer").show();
    };
    $(document).ready(function(){
        $(".logoClass img").mouseover(function () {
            $(this).removeClass().addClass('animated rubberBand').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $(this).removeClass();
            });
        });
    });
    var controller = {};
    controller.execute = function () {
        showPage();
        menuConfig();
    };
    return controller;
}
