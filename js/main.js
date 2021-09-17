$(document).ready(function() {
  // Инициализируем слайдер для блока с Категориями
  const categoriesSlider = new Swiper('.categories-slider__container', {
    direction: 'horizontal',
    loop: false,

    breakpoints: {
      1201: {
        slidesPerView: 4,
        spaceBetween: 26,
      },
      993: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      320: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 10,
      },
    },
  
    navigation: {
      nextEl: '.categories-slider__button--next',
      prevEl: '.categories-slider__button--prev',
    },
  });

  // Управление слайдером с клавиатуры
  $(document).keydown(function(e){
    if (e.which == 37) {
         $('.categories-slider__button--prev')[0].click();
        };  
    if (e.which == 39) { 
         $('.categories-slider__button--next')[0].click();
        };      
  });
  
  // Убираем кнопку "Влево", когда слайдер в крайнем левом положении
  categoriesSlider.on('reachBeginning', function() {
    $(".categories-slider__button--prev").addClass("categories-slider__button--hidden");
  });

  // Убираем кнопку "Вправо", когда слайдер в крайнем правом положении 
  categoriesSlider.on('reachEnd', function() {
    $(".categories-slider__button--next").addClass("categories-slider__button--hidden");
  });

  categoriesSlider.on('fromEdge', function() {
    if($(".categories-slider__button--prev").hasClass("categories-slider__button--hidden")) {
      $(".categories-slider__button--prev").removeClass("categories-slider__button--hidden");
    };
    if($(".categories-slider__button--next").hasClass("categories-slider__button--hidden")) {
      $(".categories-slider__button--next").removeClass("categories-slider__button--hidden");
    };
  });

  // Инициируем слайдер для блока с Неизданными книгами
  const unreleasedSlider = new Swiper('.unreleased-slider__container', {
    direction: 'horizontal',
    loop: false,
    
    breakpoints: {
      1201: {
        slidesPerView: 5,
        spaceBetween: 26,
      },
      993: {
        slidesPerView: 4,
        spaceBetween: 26,
      },
      769: {
        slidesPerView: 3,
        spaceBetween: 26,
      },
      578: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      472: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1: {
        slidesPerView: 1,
      },
    },
  
    navigation: {
      nextEl: '.unreleased__button--next',
      prevEl: '.unreleased__button--prev',
    },
  });

  // Управление слайдером с клавиатуры
  $(document).keydown(function(e){
    if (e.which == 37) {
         $('.unreleased__button--prev')[0].click();
        };  
    if (e.which == 39) { 
         $('.unreleased__button--next')[0].click();
        };      
  });
  
  // Убираем кнопку "Влево", когда слайдер в крайнем левом положении
  unreleasedSlider.on('reachBeginning', function() {
    $(".unreleased__button--prev").addClass("unreleased__button--disable");
  });

  // Убираем кнопку "Вправо", когда слайдер в крайнем правом положении 
  unreleasedSlider.on('reachEnd', function() {
    $(".unreleased__button--next").addClass("unreleased__button--disable");
  });

  unreleasedSlider.on('fromEdge', function() {
    if($(".unreleased__button--prev").hasClass("unreleased__button--disable")) {
      $(".unreleased__button--prev").removeClass("unreleased__button--disable");
    };
    if($(".unreleased__button--next").hasClass("unreleased__button--disable")) {
      $(".unreleased__button--next").removeClass("unreleased__button--disable");
    };
  });


  // Управляем видео API
  var player;
  $('.video-play-01').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('playerOne', {
      height: '100%',
      width: '100%',
      videoId: 'GrAR5zawm-4',
      events: {
        'onReady': videoPlay,
      }
    });
  });

  $('.video-play-02').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('playerTwo', {
      height: '100%',
      width: '100%',
      videoId: 'MUAjql7Ryfs',
      events: {
        'onReady': videoPlay,
      }
    });
  });

  $('.video-play-03').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('playerThree', {
      height: '100%',
      width: '100%',
      videoId: 'GeYz1e6hYcc',
      events: {
        'onReady': videoPlay,
      }
    });
  });

  $('.video-play-04').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('playerFour', {
      height: '100%',
      width: '100%',
      videoId: '3rDxtQ-E92o',
      events: {
        'onReady': videoPlay,
      }
    });
  });

  function videoPlay(event) {
    event.target.playVideo();
  };


  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $(".modal__close");
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);
  

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
    offScroll();
  };

  function closeModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  };

  $(document).keyup(function(e){
    var modalOverlay=$(".modal__overlay");
    var modalDialog=$(".modal__dialog");
    if(e.key==="Escape"){
      modalOverlay.removeClass('modal__overlay--visible');
      modalDialog.removeClass('modal__dialog--visible');
      $(window).unbind('scroll');
    }
  });

  $(document).mouseup(function(e){
    var modalOverlay=$(".modal__overlay");
    var modalDialog=$(".modal__dialog");
    if(!modalDialog.is(e.target)&&modalDialog.has(e.target).length===0){
      modalOverlay.removeClass('modal__overlay--visible');
      modalDialog.removeClass('modal__dialog--visible');
      $(window).unbind('scroll')
    }
  });

  function offScroll(){
    var winScrollTop=$(window).scrollTop();
    $(window).bind('scroll',function(){
      $(window).scrollTop(winScrollTop);
    });
  };

  var menuButton = $(".menu-button");
  menuButton.on('click', function() {
    document.querySelector(".header-top__nav").classList.toggle("header-top__nav--mobile");
  });

  $(".card__icon--01").on('click', function() {
    document.querySelector(".card__icon--01").classList.toggle("card__icon--red");
  });
  $(".card__icon--02").on('click', function() {
    document.querySelector(".card__icon--02").classList.toggle("card__icon--red");
  });
  $(".card__icon--03").on('click', function() {
    document.querySelector(".card__icon--03").classList.toggle("card__icon--red");
  });
  $(".card__icon--04").on('click', function() {
    document.querySelector(".card__icon--04").classList.toggle("card__icon--red");
  });
  $(".card__icon--05").on('click', function() {
    document.querySelector(".card__icon--05").classList.toggle("card__icon--red");
  });
  $(".card__icon--06").on('click', function() {
    document.querySelector(".card__icon--06").classList.toggle("card__icon--red");
  });

  // Обработка формы
  $(".validate-form").each(function() {
    $(this).validate({
      errorClass:"invalid",
      rules:{
        email:{
          pattern:/[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i,
        },
      },
      messages:{
        email:{
          pattern:'Почта должна быть вида: mail@domain.com',
        },
      }
    });
  });

  $('body').on('input','.modal-name', function() {
    this.value = this.value.replace(/[^a-zа-яё\s]/gi,'');
  });
  $('.modal-tel').mask('+7 (999) 999-99-99');

  var $page = $('html, body');
  $('a[href*="#"]').click(function() {
    $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
    return false;
  });

  $(function() {
    $(window).scroll(function() {
      if($(this).scrollTop() > 200) {
        $('#toTop').fadeIn();
      } else {
        $('#toTop').fadeOut();
      }
    });
  $('#toTop').click(function() {
    $('body,html').animate({scrollTop:0},800);
    return false;
  });
  });
});