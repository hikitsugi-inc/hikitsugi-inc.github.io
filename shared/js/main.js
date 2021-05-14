$(function() {
    /*
    $('.h2_vision').on('inview', function(event, isInView) {
        if (isInView) {
        //表示領域に入った時
            $(this).addClass('animation');
        } else {
        //表示領域から出た時
            $(this).removeClass('animation');
        }
    });
    $('.h2_service').on('inview', function(event, isInView) {
        if (isInView) {
        //表示領域に入った時
            $(this).addClass('animation');
        } else {
        //表示領域から出た時
            $(this).removeClass('animation');
        }
    });
    $('.h2_news').on('inview', function(event, isInView) {
        if (isInView) {
        //表示領域に入った時
            $(this).addClass('animation');
        } else {
        //表示領域から出た時
            $(this).removeClass('animation');
        }
    });
    $('.back_font').on('inview', function(event, isInView) {
        if (isInView) {
        //表示領域に入った時
            $(this).addClass('animation');
        } else {
        //表示領域から出た時
            $(this).removeClass('animation');
        }
    });
    */
    $('.animetion').on('inview', function(event, isInView) {
        if (isInView) {
        //表示領域に入った時
            $(this).addClass('on');
        }
    });

    $('a[href^="#"]').click(function(){
        let speed = 500;
        let href= $(this).attr("href");
        let target = $(href == "#" || href == "" ? 'html' : href);
        let position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });

    var $win = $(window),
    $header = $('header'),
    headerHeight = $header.outerHeight(),
    startPos = 0;

    $win.on('load scroll', function() {
        var value = $(this).scrollTop();
        if ( value > startPos && value > headerHeight ) {
        $header.css('top', '-' + headerHeight + 'px');
        } else {
        $header.css('top', '0');
        }
        startPos = value;
    });

    var pagetop = $('.top');   
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});