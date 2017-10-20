/**
 * Created by arlex on 2017/10/20.
 */

//update URL fragment generating new history record
$(function () {
    //路由的设置
    crossroads.addRoute("homepage",function(){
        hideAll();
        $("#container1").show();
        console.log("go homepage");
    })
    crossroads.addRoute("part1",function(){
        hideAll();
        $("#container2").show();
        console.log("go part1");
    })
    crossroads.addRoute("part2",function(){
        hideAll();
        $("#container3").show();
        console.log("go part2");
    })
    crossroads.addRoute("part3",function(){
        hideAll();
        $("#container4").show();
        console.log("go part3");
    })
    crossroads.routed.add(console.log, console); //log all routes

//setup hasher
    function parseHash(newHash, oldHash){
        crossroads.parse(newHash);
    }
    hasher.initialized.add(parseHash); //parse initial hash
    hasher.changed.add(parseHash); //parse hash changes
    hasher.init(); //start listening for history change
    hasher.setHash('homepage');
})

function hideAll(){
    $("#container div").hide();
}
