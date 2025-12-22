// console.log("test")
// alert("test1234")


$(document).ready(function(){
    // 과제 : 풀페이지 진행 (.sec-4,.sec-5,.footer제외) 스크롤바 활성화
    media();
    function media(){
        let windowWidth = $(window).width();
        if(windowWidth >= 1800){
            //fullpage
            new fullpage('#wrap',{
                scrollBar:true,
                normalScrollElements: '.sec-4,.sec-5,.footer',
                fitToSection:false,
                scrollingSpeed: 500,
            })
        }else{

        }
    }

    //sub-menu
    //마우스 올리면 카테고리에 맞는 탭 활성화 / 헤더 색상변경 / 서브메뉴 박스에서 마우스 나가면 기존 상태로 다시 변경
    $('.main-menu li').mouseenter(function(){
        let result = $(this).attr('data-alt');
        $('.sub-menu').removeClass('active');
        $(`#${result}`).addClass('active');

        //서브메뉴박스 보이게
        $('.sub-menu-box').addClass('active');

        //헤더색상 변경
        $('.header-area').addClass('active');
        $('.header-logo svg').addClass('active');

    });

    $('.sub-menu-box').mouseleave(function(){
        $(this).removeClass('active');

        //헤더색상 원래대로 돌리기
        $('.header-area').removeClass('active');
        $('.header-logo svg').removeClass('active');
    });

    //스크롤 위치값에 맞춰 클래스 제어
    $(window).scroll(function(){
        const sct = $(window).scrollTop();
        console.log(sct);

        //섹션별 상단 위치값 변수에 저장
        const banner = $('.banner').offset().top;
        const sec1 = $('.sec-1').offset().top;
        const sec2 = $('.sec-2').offset().top;
        const sec5 = $('.sec-5').offset().top;

        if(sct >= banner && sct < sec1){
            $('.header-area').removeClass('active');
            $('.header-logo svg').removeClass('active');
            $('.header-logo').removeClass('active');
        }else if(sct >= sec1 && sct < sec2){
            $('.header-area').addClass('active');
            $('.header-logo svg').addClass('active');
            $('.header-logo').addClass('active');
        }else if(sct >= sec2 && sct < sec5){
            $('.header-area').removeClass('active');
            $('.header-logo svg').removeClass('active');
        }else if(sct >= sec5){
            $('.header-area').addClass('active');
            $('.header-logo svg').addClass('active');
        }

    });

    //sec-4 swiper
    new Swiper('.mySwiper',{
        direction:"vertical",
        slidePerView:"auto",
        speed: 500,
        loop:true,
        autoplay:{
            delay:1500,
            disableOnInteraction:false,
        }
    })
    
    // 상단이동버튼 300px 이상일때 최상단으로 올라가는 상단이동버튼 구현해보기(배너에서 없어져있다가 sec1에서부터 보이게)
    let btn = $('.top-btn');
    $(window).scroll(function(){
        if($(window).scrollTop() >= 300){
            btn.fadeIn();
        }else{
            btn.fadeOut();
        }
    });
    btn.click(function(){
        $('html,body').animate({
            scrollTop: 0
        },500);
    });
});