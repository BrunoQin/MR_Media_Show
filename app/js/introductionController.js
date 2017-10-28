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
        var controller = new ScrollMagic.Controller({container:"#wrapper-in"});
        //设置文字框的ID
        $("#wrapper-in>div").children("p").map(function (index,dom) {
            dom.id = "p"+index;
            addAnimation(controller,dom.id);
        })
    }

    function addAnimation(controller,id){
        id = "#"+id;
        var textShow = TweenMax.staggerFromTo(id,1,
            {
                y:0,
                scale:1,
                opacity:0,
            },
            {
                y:-30,
                scale:1,
                opacity:1
            },
            1)
        var sceneShow = new ScrollMagic.Scene({
            triggerElement:id,
            duration:150,
            offset: -150
        })
            .setTween(textShow)
            // .addIndicators()
            .addTo(controller);

        var textHide = TweenMax.staggerFromTo(id,1,
            {
                y:-30,
                scale:1,
                opacity:1
            },
            {
                y:-60,
                scale:1.5,
                opacity:0
            },
            1)
        var sceneHide = new ScrollMagic.Scene({
            triggerElement:id,
            duration:350,
            offset: 0
        })
            .setTween(textHide)
            // .addIndicators()
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