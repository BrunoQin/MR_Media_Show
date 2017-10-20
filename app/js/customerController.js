/**
 * Created by arlex on 2017/10/20.
 *
 */
//我们的客户界面的初始化
var customerController = function(){
    var showPage = function(){
        $("#container > div").hide();
        $("#customer").show();
    };
    var controller = {};
    controller.execute = showPage;
    return controller;
}