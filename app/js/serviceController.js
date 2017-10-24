/**
 * Created by arlex on 2017/10/20.
 *
 */
//我们的服务界面的初始化
var serviceController = function(){
    var showPage = function(){
        $("#container > div").hide();
        $("#service").show();
    };


    $(document).ready(function(){
        var width = window.innerWidth;
        var height = window.innerHeight;
        $("#container").css("width",width);
        $("#container").css("height",height);
        $("#test").click(
            function () {
                $('#slide').addClass('trans-layer').animate({top:'-1250px'},900,function () {
                    $('#slide').removeClass('trans-layer');
                    $('#slide').css("top",0);
                });
            }
        );
    });


    var controller = {};
    controller.execute = showPage;
    return controller;
}
