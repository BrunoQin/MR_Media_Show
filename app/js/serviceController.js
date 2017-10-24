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
    controller.execute = showPage;
    return controller;
}

