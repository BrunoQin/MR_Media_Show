/**
 * Created by arlex on 2017/10/20.
 * 针对主页面利用JS做一些初始化的操作
 */

var introductionController = function(){
    var showPage = function(){
        console.log("execute");
        $("#container > div").hide();
        $("#introduction").show();
    };
    var controller = {};
    controller.execute = showPage;
    return controller;
}