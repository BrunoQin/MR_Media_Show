var controller = {
    introduction: introductionController(),
    service: serviceController(),
    customer: customerController(),
    joinus: joinusController(),
    connection: connectionController()
}

$(function () {
    //路由的设置
    crossroads.addRoute("introduction",function(){
        loadPage(controller.introduction);
    })
    crossroads.addRoute("service",function(){
        loadPage(controller.service);
    })
    crossroads.addRoute("customer",function(){
        loadPage(controller.customer);
    })
    crossroads.addRoute("joinus",function(){
        loadPage(controller.joinus);
    })
    crossroads.addRoute("connection",function(){
        loadPage(controller.connection);
    })
    crossroads.routed.add(console.log, console); //log all routes

    //setup hasher
    function parseHash(newHash, oldHash){
        crossroads.parse(newHash);
    }
    hasher.initialized.add(parseHash); //parse initial hash
    hasher.changed.add(parseHash); //parse hash changes
    hasher.init(); //start listening for history change
    //update URL fragment generating new history record
    hasher.setHash('introduction');
})

//载入页面
function loadPage(controller){
    controller.execute();
}
