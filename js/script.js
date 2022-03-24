$(function(){
    var containerEl = document.querySelector('.featured');

    var mixer = mixitup(containerEl);

    $('.toggler').click(function() {
      $('.stick').toggleClass('trigger');
    });

    $('.team-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        nextArrow: '.right',
        prevArrow: '.left',
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrows: false,
              pauseOnHover: false,
            }
          },
        ]
      
      });
    $('.blog-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        nextArrow: '.right',
        prevArrow: '.left',
        pauseOnHover: false,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrows: false,
              pauseOnHover: false,
            }
          },
        ]
      });

      $(window).scroll(function(){
    var top= $(this).scrollTop()
      if(top){
        $(".navbar").addClass("stiky-menu")
      }
      else{
        $(".navbar").removeClass("stiky-menu")
      }
  })

  var scrollLink = $('.scroll-link');
  $(scrollLink).on('click', function (event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top - 100
    }, 500);
  });
  $(window).on('scroll', function () {
    var scrollTop = $(this).scrollTop();
    scrollLink.each(function () {
      var sectionhead = $(this.hash).offset().top - 20;
      if (scrollTop >= sectionhead) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    });
  });
});