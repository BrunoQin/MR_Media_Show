/**
 * @Discription 翻页动画
 */


var nextPage = function (pageDiv) {
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
    },2500);
};

var prePage = function (pageDiv) {
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
    },2800);

};