/**
 * Created by arlex on 2017/10/20.
 *
 */
//主页的初始化
var introductionController = function(){

    //设置背景视频的大小
    function configVideo(){
        window.onresize = function () {
            resizeToCover();
        };
        $(window).trigger("resize");
    }

    //背景视频图片实时平铺整个界面
    function resizeToCover(){
        var width = $(document).width();
        var height = $(document).height();

        var video_height = $("#video").attr("height");
        var video_width = $("#video").attr("width");

        var scale_h = height/video_height;
        var scale_w = width/video_width;

        var scale = scale_w > scale_h ? scale_w : scale_h;

        var new_height = scale * video_height;
        var new_width = scale * video_width

        $("#video").attr("width",new_width);
        $("#video").attr("height",new_height);

        $('#video_contanier').scrollLeft((new_width - width) / 2);
        $('#video_contanier').scrollLeft((new_height - height) / 2);
    }

    //展示出当前的页面
    function showPage(){
        $("#container > div").hide();
        $("#introduction").show();
    };

    //设置星球大战文字动画
    function setStartScroll(){
        var controller = new ScrollMagic.Controller({container:"#wrapper"});
        var textShow = TweenMax.staggerFromTo("#wrapper .item",1,
            {
                scale:0.8,
                opacity:0
            },
            {
                scale:1.5,
                opacity:1
            },
            0.2)
        var sceneShow = new ScrollMagic.Scene({
            triggerElement:"#trigger",
            duration:300,
            offset: 100
        })
            .setTween(textShow)
            .addIndicators()
            .addTo(controller);

        var textHide = TweenMax.staggerFromTo("#wrapper .item",1,
            {
                scale:1.5,
                opacity:1
            },
            {
                scale:3,
                opacity:0
            },
            0.2)
        var sceneHide = new ScrollMagic.Scene({
            triggerElement:"#trigger",
            duration:200,
            offset: 500
        })
            .setTween(textHide)
            .addIndicators()
            .addTo(controller);
    }

    var controller = {};
    var execute = function () {
        configVideo();
        setStartScroll();
        showPage();
    }
    controller.execute = execute;
    return controller;
}