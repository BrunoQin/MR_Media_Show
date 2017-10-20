/**
 * Created by arlex on 2017/10/20.
 *
 */

//联系我们界面的初始化
var joinusController = function(){
    var showPage = function(){
        $("#container > div").hide();
        $("#joinus").show();
    };
    var controller = {};
    controller.execute = showPage;
    return controller;
}