$(document).ready(function(){

    $('.burger_button').click(function(event){
        $('.header_menu_mobile').addClass('active')
        $('body').addClass('lock')
    }); 
    $('.menu_exit').click(function(event){
        $('.header_menu_mobile').removeClass('active')
        $('body').removeClass('lock')
    }); 

    $('.equipment_content_zag').click(function(event){
      $(this).parents().toggleClass('active')
  }); 

    $('.main_top_block_slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
      });


      $('.projects_block_slider').slick({
        prevArrow: $('.projects_block_button_l'),
        nextArrow: $('.projects_block_button_r'),
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              }
            },
            {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                }
            }
          ]
          
      });
      $('.reviews_slider').slick({
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,

        responsive: [
            {
              breakpoint: 1700,
              settings: {
                slidesToShow: 3,
              }
            },
            {
                breakpoint: 1260,
                settings: {
                  slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                }
            }
          ]
          
      });
      

      $('.news_block_mobile').slick({
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
          
      });


      $('.bottom_slider').slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.bottom_slider_buttons_l'),
        nextArrow: $('.bottom_slider_buttons_r'),
        responsive: [
            {
              breakpoint: 1700,
              settings: {
                slidesToShow: 3,
              }
            },
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                }
            }
          ]
          
      });

      $('.gallery').slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.gallery_button_left'),
        nextArrow: $('.gallery_button_right'),
        responsive: [
            {
              breakpoint: 1440,
              settings: {
                slidesToShow: 2,
              }
            },
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                }
            }
          ]
          
      });

      $('.employees_block_mobile').slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.employees_left'),
        nextArrow: $('.employees_right'),
        responsive: [
            {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                }
            }
          ]
          
      });

      $('.village_map_item').hover(
        function() {
            $(this).toggleClass('active');
        }
      );
      
    /*
    $('.catalog').click(function(event){
        $('.menu_block').toggleClass('active')

    }); 

    $('.menu_img').click(function(event){
        $('.menu_block').toggleClass('active')

    }); 
    $('.fixed_menu_img').click(function(event){
        $('.menu_block').toggleClass('active')
        $('body').toggleClass('lock')
    }); 

    $('.but_1').hover(
        function() {
            $('.menu_block_content').removeClass('active');
            $('.menu_b_1').toggleClass('active')
            $('.left_button').removeClass('active');
            $(this).addClass('active')
        }
      );
      $('.but_2').hover(
        function() {
            $('.menu_block_content').removeClass('active');
            $('.menu_b_2').toggleClass('active')
            $('.left_button').removeClass('active');
            $(this).addClass('active')
        }
      );
      $('.but_3').hover(
        function() {
         
            $('.menu_block_content').removeClass('active');
            $('.menu_b_3').toggleClass('active')
            $('.left_button').removeClass('active');
            $(this).addClass('active')
        }
      );

      $('.but_4').hover(
        function() {
         
            $('.menu_block_content').removeClass('active');
            $('.menu_b_4').toggleClass('active')
            $('.left_button').removeClass('active');
            $(this).addClass('active')
        }
      );

 
      var header = $(".header");
    var scrollChange;
        var w = $(window).width();
    if(w > 1490){
        scrollChange = 472;
    }
    if(w <= 1490 && w > 1199){
        scrollChange = 388;
    }
    if(w <= 1199 && w > 991){
        scrollChange = 297;
    }
    if(w <= 991 && w > 767){
        scrollChange = 247;
    }
    if(w <= 767 && w > 575){
        scrollChange = 75;
    }
    if(w <= 575){
        scrollChange = 65;
    }

    $(window).resize(function(){
        if(991 < $(window).width() <= 1199){
            scrollChange = 100;
        }
    });

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= scrollChange) {
        header.addClass('header_none');
        if ($(".menu_block").hasClass("active")){
            $('body').toggleClass('lock')
        }
    } else {
        header.removeClass("header_none");
    }
});

*/


$('.project_slider_and_info_slider').slick({
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: $('.project_slider_and_info_b_l'),
  nextArrow: $('.project_slider_and_info_b_r'),
  responsive: [
      {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          }
      }
    ]
    
});


});

