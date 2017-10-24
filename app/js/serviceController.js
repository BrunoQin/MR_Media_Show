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

    $('#test1').on('click',function () {
        $('#test').addClass('trans-layer');
    });

    var controller = {};
    controller.execute = showPage;
    return controller;
}
