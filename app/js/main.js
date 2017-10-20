var controller = {
    introduction: introductionController(),
    partTwo: partTwoController()
}

$(function () {
    //路由的设置
    crossroads.addRoute("introduction",function(){
        loadPage(controller.introduction);
    })
    crossroads.addRoute("part1",function(){
        loadPage(controller.partTwo);
    })
    crossroads.addRoute("part2",function(){

    })
    crossroads.addRoute("part3",function(){

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
