/**
 * Created by arlex on 2017/10/20.
 *
 */
//主页的初始化
var introductionController = function(){

    var page = 1;

    //展示出当前的页面
    function showPage(){
        $("#container > div").hide();
        $("#introduction").show();
        $("#dot1").addClass("active-dot");
    }

    //菜单栏设置
    function menuConfig(){
        $("header").children("a").map(function () {
            $(this).removeClass("menu");
            $(this).addClass("menu");
        });
        $("#introduction-menu").removeClass("menu");
        $(".process-container").remove();
        var process = $("<div class='process-container'> <div class='process-line'></div></div>");
        process.appendTo($("#introduction-menu"));

    }

    var goNext = function goNext(){
        var targetPos = page*(-100)+"%";
        $("#content").animate({top:targetPos},300,"linear",function () {
            var last = page - 1;
            $("#dot"+last).removeClass("active-dot");
            $("#dot"+page).addClass("active-dot");
        })
        page++;
        if(page >= 4){
            $("#nextPointer").hide();
        }
    }

    var changePage = function changePage(page){
        var targetPos = (page-1)*(-100)+"%";
        $("#content").animate({top:targetPos},500,"linear",function () {
            $("#sidebar").children(".dot").map(function (index) {
                var index = index+1;
                $("#dot"+index).removeClass("active-dot");
            })
            $("#dot"+page).addClass("active-dot");
            if(page != 4){
                $("#nextPointer").show();
            }
        })
        if(page == 4){
            $("#nextPointer").hide();
        }
    }


    var controller = {};
    var execute = function () {
        showPage();
        menuConfig();
    }
    controller.execute = execute;
    controller.goNext = goNext;
    controller.changePage = changePage;
    return controller;
}