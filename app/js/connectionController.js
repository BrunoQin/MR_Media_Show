/**
 * Created by arlex on 2017/10/20.
 *
 */

//联系我们界面的初始化
var connectionController = function(){
    var showPage = function(){
        $("#container > div").hide();
        $("#connection").show();
    };
    var controller = {};
    controller.execute = showPage;
    return controller;
}