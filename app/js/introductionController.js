/**
 * Created by arlex on 2017/10/20.
 *
 */
//主页的初始化
var introductionController = function(){
    var showPage = function(){
        $("#container > div").hide();
        $("#introduction").show();
    };
    var controller = {};
    controller.execute = showPage;
    return controller;
}