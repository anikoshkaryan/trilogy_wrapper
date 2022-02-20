//*hamburger-menu part



$(document).on("click", ".hamburger-menu", function(){
    
    $('.mobile_version').fadeToggle();


  
});

$(document).on("click", ".mobile-close", function(){
  
    $('.mobile_version').fadeToggle();

  
});

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      324: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      330: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      340: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      350: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      360: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      370: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      380: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      400: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      420: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      426: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      440: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      450: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      460: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      470: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      500: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      600: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      700: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      800: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      900: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      1000: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      1100: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      1120: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      1130: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      1140: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      1150: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      1152: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      1155: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      1157: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      1158: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      1160: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      1170: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      1180: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      1170: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      1180: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      1190: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      1200: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      1216: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      1218: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      1220: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      1230: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      1240: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      1250: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      1260: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      1270: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      1280: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      1299: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      1300: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      1400: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      1500: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      1600: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      1700: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      1800: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      1920: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
    
  
  });



  $("#phone").inputmask("+(7)99 99-99-99");
  $("#email").inputmask({alias: "email"});


