/**
 * Created by arlex on 2017/10/20.
 *
 */

var introductions = {"TMail":"正品网购,上天猫!天猫千万大牌正品,品类全,一站购,支付安全,退换无忧!理想生活上天猫!",
    "KaoLa":"网易考拉-海购网站精选，网易自营，假一赔十，新人专享送1000元大礼包，网易考拉-用更少的钱过更好的生活",
    "wechat":"微信，是一种生活方式，超过9亿人使用的手机应用，支持发送语音短信、视频、图片和文字，可以群聊，仅耗少量流量，适合大部分智能手机"};
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
        //监听滚动事件·
        var scroll_height = $(".content-container>div").height();
        $(".content-container").scroll(function () {
            var current = $(".content-container").scrollTop();
            //当滑动到底的时候，监听鼠标滚轮事件，触发到下一页
            if(current + $(".content-container").height() >= scroll_height){
                $(document).on("mousewheel",function (e) {
                    var moveY = e.originalEvent.deltaY;
                    if(moveY>0){
                        current += moveY;
                    }else if(moveY<0){
                        $(document).off("mousewheel");
                    }
                    var progress = current/scroll_height*100;
                    if(progress>=100){//当进度条满了的时候跳转页面
                        $(document).off("mousewheel");
                        document.getElementById("joinus-menu").click();
                    }else{
                        $("#customer-menu .process-container .process-line").css({
                            "width":progress+"%"
                        });
                    }
                })
            }
            var progress = current/scroll_height*100;
            $("#customer-menu .process-container .process-line").css({
                "width":progress+"%"
            });
        })
    }


    function showPage(){
        $("#container > div").hide();
        $("#customer").show();
    };
    function getTargetName(url) {
        var splitList = url.split("/");
        var midData = splitList[splitList.length-1];
        var midDataList = midData.split(".png");
        return midDataList[0];
    }
    $(document).ready(function(){
        $(".brand .logoClass img").mouseover(function () {
            $(this).removeClass().addClass('animated rubberBand').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $(this).removeClass();
            });
            var url = $(this)[0].src;
            $("#cooper-brand-img img").attr("src",url);
            $("#cooper-brand-img").show();
            var targetName = getTargetName(url);
            $("#cooper-brand-img h3").text(introductions[targetName]);
            $("#cooper-brand-text").hide();
        });
        $(".brand .logoClass img").mouseleave(function () {
            $("#cooper-brand-img").hide();
            $("#cooper-brand-img h3").text("");
            $("#cooper-brand-text").show();
        })

        $(".customer .logoClass img").mouseover(function () {
            $(this).removeClass().addClass('animated rubberBand').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $(this).removeClass();
            });
            var url = $(this)[0].src;
            $("#cooper-customer-img img").attr("src",url);
            $("#cooper-customer-img").show();
            var targetName = getTargetName(url);
            $("#cooper-customer-img h3").text(introductions[targetName]);
            $("#cooper-customer-text").hide();
        });
        $(".customer .logoClass img").mouseleave(function () {
            $("#cooper-customer-img").hide();
            $("#cooper-customer-img h3").text("");
            $("#cooper-customer-text").show();
        })
    });
    var controller = {};
    controller.execute = function () {
        showPage();
        menuConfig();
    };
    return controller;
}
