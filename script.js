// 指定箇所への自動スクロールボタン
$(".h-scroll-sns, .h-navList-link, .mobile-menu-link").on("click", function() {
   var adjust = 0;
   var speed = 600;
   var href = $(this).attr("href");
   var target = $(href == "#" || href == "" ? "html" : href);
   var position = target.offset().top + adjust;
   $("body, html").animate({scrollTop : position}, speed, "swing");
   return false;
});

// ページ下部、ページトップへの自動スクロールボタン
var toPagetop = $(".pagetop-btn");
toPagetop.click(function() {
   $("body, html").animate({scrollTop : 0}, 500);
   return false;
});

//　swiperの設定
var mySwiper = new Swiper('.swiper-container', {
   centeredSlides: true,
   slidesPerView: 1.15,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },
   pagination: {
      el: '.swiper-pagination',
      type: 'fraction'
   },
   scrollbar: {
      el: '.swiper-scrollbar',
      hide: false,
      draggable: true
   },
   breakpoints: {
      1024: {
         loop: true,
         slidesPerView: 5
      },
   }
});


var toPagetop = $(".pagetop-btn");
toPagetop.hide();
$(window).scroll(function() {
   if($(this).scrollTop() > 500) {
      toPagetop.fadeIn(200);
   } else {
      toPagetop.fadeOut(200);
   }
});
toPagetop.click(function() {
   $("body, html").animate({scrollTop : 0}, 500);
   return false;
});


// トップぺージ、お知らせモーダルウィンドウ　表示/非表示
$('.notice-wrap').on('click', function() {
   $('.notice-modal').addClass('open');
   $('body').addClass('fixed');
});
$('.notice-modal-close').on('click', function() {
   $('.notice-modal').removeClass('open');
   $('body').removeClass('fixed');
});

// モバイル用メニューリスト　表示/非表示
$('.h-navBtn-wrap, .mobile-menu-link').on('click', function() {
   $('.h-navBtn-open').toggleClass('open');
   $('.h-navBtn-close').toggleClass('open');
   $('.h-navBtn-txt').toggleClass('open');
   $('.h-navBtn-txt01').toggleClass('open');
   $('.h-navBtn-txt02').toggleClass('open');
   $('.mobile-menu').toggleClass('open');
   $('body').toggleClass('fixed');
});

