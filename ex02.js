$(document).ready(function(){
    // active영역

    $('#hamburger').click(function(){
      $(this).toggleClass('active');
      // $('.header-menu').toggleClass('active');
      $(this).siblings('.sidebar').toggleClass('on');
      // $(".dimmed").toggleClass('on');
    });    

    // 
    $(window).scroll(function(){
      const sct = $(window).scrollTop();

      console.log(sct);
      
      if(sct >= 1000){
        $('.header-area').addClass('active')
        $('.header-area .header-logo svg').addClass('active')
        $('.header-area .header-menu .menu li').addClass('active')
        $('#hamburger span').addClass('on')
      }else{
        $('.header-area').removeClass('active')
        $('.header-area .header-logo svg').removeClass('active')
        $('.header-area .header-menu .menu li').removeClass('active')
        $('#hamburger span').removeClass('on')
      }
    });




    // $('.header-area .header-menu .menu').mouseleave(function(){
    //   $('.header-area').removeClass('active')
    //   $('.header-area .header-logo svg').removeClass('active')
    //   $('.header-area .header-menu .menu li').removeClass('active')
    //   $('.sub-menu-wrap').removeClass('active')
    // });

    // 서브메뉴박스
    $('.header-area .header-menu .menu li a').mouseenter(function(){
      $('.header-area').addClass('active')
      $('.header-area .header-logo svg').addClass('active')
      $('.header-area .header-menu .menu li').addClass('active')
      // $('.sub-menu-wrap').addClass('active')
    });


    $('.header-area .header-menu .menu li a').mouseenter(function(){
      $('.sub-menu-wrap').addClass('active')
    });

    $('.sub-menu-wrap').mouseleave(function(){
      $('.header-area').removeClass('active')
      $('.sub-menu-wrap').removeClass('active')
    });






    // sec-4 swiper
    var swiper = new Swiper(".firstSwiper", {

        // slidesPerView:3,
        // spaceBetween: 24,
        // slidesPerGroup:1,

        loop:true,
        speed : 1500,
        autoplay :{
          delay:2000,
          disableOnInteraction: false,
        },

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        breakpoints:{
          1420:{
            slidesPerView: 3,
            spaceBetween: 24,
            slidesPerGroup:1,
          },
          1000:{
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup:1,
          },
          0:{
            slidesPerView: 3,
            spaceBetween: 16,
            slidesPerGroup:1,
          }
        }
      });



      var swiper = new Swiper(".secondSwiper", {

        loop:true,
        speed : 1500,
        autoplay :{
          delay:2000,
          disableOnInteraction: false,
        },

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        breakpoints:{
          1420:{
            slidesPerView: 3,
            spaceBetween: 24,
            slidesPerGroup:1,
          },
          1000:{
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup:1,
          },
          0:{
            slidesPerView: 3,
            spaceBetween: 16,
            slidesPerGroup:1,
          }
          // 500:{
          //   slidesPerView: 3,
          //   spaceBetween: 16,
          //   slidesPerGroup:1,
          // },
        }
      });

      
      AOS.init();


      // 탑버튼
      const btn = $('.top-btn');
      $(window).scroll(function(){
        if($(window).scrollTop() > 300){
            btn.fadeIn();
        }else{
            btn.fadeOut();
        }
    });
    btn.on('click',function(e){
      e.preventDefault();
      $('html,body').animate({
          scrollTop:0
      },100);
      });
});