$(function () {
    // 导航动画
    var navMain = $('#header-common');
    var navMainStatus = $('#header-common').length;
    var navSider = $('.nav');
    var navSiderStatus = navSider.length;
    var navContent = $('body > .content')
    var windowsWidthStatus = $(document).width()>768;
    if(navMainStatus && windowsWidthStatus) {
        $(window).scroll(function(){
            if($(window).scrollTop()>=200) {
                navMain.addClass('navMainScroll')
            }else {
                navMain.removeClass('navMainScroll')
            }
        })
    }
    if(navSiderStatus) {
        $(window).scroll(function(){
            if($(window).scrollTop()>=200) {
                navContent.addClass('activated');
            }else {
                navContent.removeClass('activated');
            }
        })
    }
    // 锚点平滑跳转
    $('a').click(function() {
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
           var $target = $(this.hash);
           $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
           if ($target.length) {
              var targetOffset = $target.offset().top;
              if($(window).scrollTop()>=200) {
                $('html,body').animate({
                    scrollTop: targetOffset+30+'px'
                 },
                 1000);
              } else{
                $('html,body').animate({
                    scrollTop: targetOffset
                 },
                 500);
              }
              
              return false;
           }
        }
    });
    // 锚点对应显示左侧当前项
    if($('.content li a').length>0) {
        $(document).scroll(function(){
            $('.anchor').each(function(index){
                if($('.anchor').eq(index).offset().top<$(document).scrollTop()) {
                    $('.content li a').eq(index).addClass('active').parent().siblings().find('a').removeClass('active')
                }
                if ($(document).scrollTop() >= $(document).height() - $(window).height()) {
                    $('.content li a').eq(index).addClass('active').parent().siblings().find('a').removeClass('active')
                }
            })

            
        })
    }
    // 二维码显示
    if($('.erweima').length>0){
        $('.erweima').prev('a').hover(function(){
            $('.erweima').fadeIn()
        },function(){
            $('.erweima').fadeOut()
        });
    }
    // 移动端主导航
    if($('#header .btn,#header-common .btn').length>0){
        $('#header .btn,#header-common .btn').on('click',function(){
            $('#nav-m').addClass('active');
        })
        $('.top .close,.shade').on('click',function(){
            $('#nav-m').removeClass('active')
        })
    }
    // 首页幻灯
    if($('.swiper-container').length>0){
        var swiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true
            },
            loop : true,
            autoplay:true,
            delay:1000
        });
    }
})