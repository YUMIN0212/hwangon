
// // 브랜드 가치 효과
// const brand = gsap.timeline();
// brand
//     .from(".brand .brand_bg1", {
//         xPercent: innerWidth * 1,
//         duration: 1000,
//     }, )
//     .from(".brand .brand_bg2", {
//         xPercent: innerWidth * -1,
//         duration: 1000,
//     }, "+=1")
//     .from(".brand .brand_bg3", {
//         xPercent: innerWidth * 1,
//         duration: 1000,
//     }, "+=1")

// ScrollTrigger.create({
//     animation: brand,
//     trigger: ".brand",
//     start: "top top",
//     end: "+=5000",
//     scrub: true,
//     pin: true,
//     anticipatePin: 1, // 핀 효과를 부드럽게 줄 수 있음.
// });

// 스크롤 부드럽게 만들기
const lenis = new Lenis();

lenis.on('scroll', (e) => {
    console.log(e);
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// 스크롤 시 떠오르는 글자 효과
AOS.init();

// 프로그램 스크롤
$(function () { //on DOM ready 
    $("#scroller").simplyScroll({
        speed: 0.5,
        direction: 'backwards',
    });
});

// 유황스토어 탭메뉴
$(function () {
    $(".tabmenu> li").click(function () {
        $(this).addClass("on").siblings().removeClass();
    });
});

// 달력
$(function () {
    $.datepicker.setDefaults($.datepicker.regional['ko']);
    var dateFormat = 'yy/mm/dd',
        from = $("#from")
            .datepicker({
                defaultDate: "+1w",
                changeMonth: true,
                numberOfMonths: 2
            })
            .on("change", function () {
                to.datepicker("option", "minDate", getDate(this));
            }),
        to = $("#to").datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 2
        })
            .on("change", function () {
                from.datepicker("option", "maxDate", getDate(this));
            });

    function getDate(element) {
        var date;
        try {
            date = $.datepicker.parseDate(format, element.value);
        } catch (error) {
            date = null;
        }

        return date;
    }
});

// 카운트
$(document).ready(function () {
    $('.__count_range input[count_range]').click(function (e) {
        e.preventDefault();
        var type = $(this).attr('count_range');
        var $count = $(this).parent().children('input.count');
        var count_val = $count.val(); // min 1
        if (type == 'm') {
            if (count_val < 1) {
                return;
            }
            $count.val(parseInt(count_val) - 1);
        } else if (type == 'p') {
            $count.val(parseInt(count_val) + 1);
        }
    });
});

// 헤더 고정 및 스크롤
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#top').outerHeight();

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }

}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('#top').addClass('nav-up');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('#top').removeClass('nav-up');
        }
    }
    lastScrollTop = st;
}

// 갤러리 센터
var swiper3 = new Swiper(".center", {
    slidesPerView: 3,
    spaceBetween: 10,

    loop: true,
    centeredSlides: true,

    navigation: {
        nextEl: ".r_next",
        prevEl: ".r_left",
    },
});

//  룸 페이드/넘김 슬라이드
var swiper1 = new Swiper(".mySwiper", {
    effect: "fade",

    loop: true, autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    Speed: 1000,
    navigation: {
        nextEl: ".r_next",
        prevEl: ".r_left",
    },
});

// 메인배너 페이드 슬라이드
var swiper2 = new Swiper(".fade", {
    effect: "fade",

    loop: true, autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    Speed: 1000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
