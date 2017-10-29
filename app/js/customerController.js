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
    $(document).ready(function(){
        $(".brand .logoClass img").mouseover(function () {
            $(this).removeClass().addClass('animated rubberBand').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $(this).removeClass();
            });
            var url = $(this)[0].src;
            $("#cooper-brand-img img").attr("src",url);
            $("#cooper-brand-img").show();
            $("#cooper-brand-text").hide();
        });
        $(".brand .logoClass img").mouseleave(function () {
            $("#cooper-brand-img").hide();
            $("#cooper-brand-text").show();
        })

        $(".customer .logoClass img").mouseover(function () {
            $(this).removeClass().addClass('animated rubberBand').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $(this).removeClass();
            });
            var url = $(this)[0].src;
            $("#cooper-customer-img img").attr("src",url);
            $("#cooper-customer-img").show();
            $("#cooper-customer-text").hide();
        });
        $(".customer .logoClass img").mouseleave(function () {
            $("#cooper-customer-img").hide();
            $("#cooper-customer-text").show();
        })
    });
    var controller = {};
    controller.execute = showPage;
    return controller;
}
