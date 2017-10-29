var controller = {
    introduction: introductionController(),
    service: serviceController(),
    customer: customerController(),
    joinus: joinusController(),
    connection: connectionController()
};

var currentPage = 0;

$(function () {
    //路由的设置
    crossroads.addRoute("introduction",function(){
        $(".service-background").removeClass('background-animation');
        loadPage(controller.introduction);

        if(currentPage > 0) {
            prePage($('#introduction'))
        }
        currentPage = 0;
    });
    crossroads.addRoute("service",function(){
        loadPage(controller.service);
        if(currentPage<1){
            nextPage($('.service-background'));
        }else{
            prePage($('.service-background'))
        }
        setTimeout(function () {
            $(".service-background").addClass('background-animation');
        },1000);
        currentPage = 1;
    });
    crossroads.addRoute("customer",function(){
        $(".service-background").removeClass('background-animation');
        loadPage(controller.customer);
        currentPage = 2;
    });
    crossroads.addRoute("joinus",function(){
        $(".service-background").removeClass('background-animation');
        loadPage(controller.joinus);
        currentPage = 3;
    });
    crossroads.addRoute("connection",function(){
        $(".service-background").removeClass('background-animation');
        loadPage(controller.connection);
        currentPage = 4;
    });
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
});

//载入页面
function loadPage(controller){
    controller.execute();
}

/**
 * @Discription 翻页动画
 */

var clearPage = function (pageDiv) {
    $('#slide').removeClass('trans-layer-next');
    pageDiv.removeClass('section-trans-next');
    $('#slide').removeClass('trans-layer-pre');
    pageDiv.removeClass('section-trans-pre');
};

var nextPage = function (pageDiv) {
    $('#slide').addClass('trans-layer-next');
    pageDiv.addClass('section-trans-next');
    setTimeout(function () {
        $('#slide').removeClass('trans-layer-next');
    },1000);
    setTimeout(function () {
        pageDiv.removeClass('section-trans-next');
    },1000);
};

var prePage = function (pageDiv) {
    $('#slide').addClass('trans-layer-pre');
    pageDiv.addClass('section-trans-pre');
    setTimeout(function () {
        $('#slide').removeClass('trans-layer-pre');
    },1000);
    setTimeout(function () {
        pageDiv.removeClass('section-trans-pre');
    },1000);

};


