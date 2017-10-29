/**
 * Created by arlex on 2017/10/20.
 *
 */
//我们的服务界面的初始化
var serviceController = function(){
    //菜单栏设置
    function menuConfig(){
        $("header").children("a").map(function () {
            $(this).removeClass("menu");
            $(this).addClass("menu");
        })
        $("#service-menu").removeClass("menu");
        $(".process-container").remove();
        var process = $("<div class='process-container'> <div class='process-line'></div></div>");
        process.appendTo($("#service-menu"));
    }

    function showPage(){
        $("#container > div").hide();
        $("#service").show();
    };
    var flag = true;


    $(document).ready(function(){
        $("#test").click(
            function () {
                clearPage($('.img-background'));
                setTimeout(function () {
                    nextPage($('.img-background'));
                },200);
            }
        );
    });




    var controller = {};
    controller.execute = function(){
        showPage();
        menuConfig();
    };
    return controller;
}

