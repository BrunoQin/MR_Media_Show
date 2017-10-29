/**
 * @Discription 翻页动画
 * @Param pageDiv 需要滚动的div Cotroller 需要切换到的页
 */

var flipPage = function (pageDiv,Controller) {
    var currentPages = {
        "introduction" : 0,
        "service" : 1,
        "customer" : 2,
        "joinus" : 3,
        "connection" : 4
    };
    if(currentPage< currentPages[Controller]){
        nextPage(pageDiv);
    }else{
        prePage(pageDiv)
    }
    setTimeout(function () {
        $("#container > div").hide();
        $("#"+Controller).show();
    },1750);

};


var isLoading = 0;

var nextPage = function (pageDiv) {
    isLoading = 1;
    $('#slide1').addClass('trans-layer-next');
    setTimeout(function () {
        pageDiv.addClass('section-trans-next');
    },1000);
    setTimeout(function () {
        $('#slide2').addClass('trans-layer-next2');
    },1000);
    setTimeout(function () {
        $('#slide1').removeClass('trans-layer-next');
    },2500);
    setTimeout(function () {
        $('#slide2').removeClass('trans-layer-next2');
    },3700);
    setTimeout(function () {
        pageDiv.removeClass('section-trans-next');
        isLoading = 0;
    },2500);
};

var prePage = function (pageDiv) {
    isLoading = 1;
    $('#slide1').addClass('trans-layer-pre');
    setTimeout(function () {
        pageDiv.addClass('section-trans-pre');
    },1000);
    setTimeout(function () {
        $('#slide2').addClass('trans-layer-pre2');
    },1000);
    setTimeout(function () {
        $('#slide1').removeClass('trans-layer-pre');
    },2500);
    setTimeout(function () {
        $('#slide2').removeClass('trans-layer-pre2');
    },2800);
    setTimeout(function () {
        pageDiv.removeClass('section-trans-pre');
        isLoading = 0;
    },2800);

};

