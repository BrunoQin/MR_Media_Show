/**
 * Created by arlex on 2017/10/20.
 *
 */
//主页的初始化
var introductionController = function(){

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

    function showPage(){
        $("#container > div").hide();
        $("#introduction").show();
    };

    var controller = {};
    var execute = function () {
        configVideo();
        showPage();
    }
    controller.execute = execute;
    return controller;
}