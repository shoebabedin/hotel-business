$(document).ready(function () {
  AOS.init();

  // preloader

  $(window).on("load", function () {
    $("#preloader ").fadeOut(500);
    $("#main").css({ overflow: "unset" });
  });

  // preloader


  
  $(".dropdown-menu").click(function(){
    $("#dropdown").toggleClass("invisible");
  });

  $(".dropdown-menu").click(function(){
    $(".dropdown-menu").toggleClass("opacity-60");
  });

  // top nav close button
  $(".close").click(function () {
    $(".top_nav").slideUp(500);
  });
  // top nav close button

  // sticky nav
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".nav").addClass("sticky");
    } else {
      $(".nav").removeClass("sticky");
    }
  });
  // sticky nav

  // countdown
  function makeTimer() {
    //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");
    var endTime = new Date("29 Dec 2022 9:56:00 GMT+01:00");
    endTime = Date.parse(endTime) / 1000;

    var now = new Date();
    now = Date.parse(now) / 1000;

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(
      timeLeft - days * 86400 - hours * 3600 - minutes * 60
    );

    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }

    $("#days").html(days);
    $("#hours").html(hours);
    $("#minutes").html(minutes);
    $("#seconds").html(seconds);
  }

  setInterval(function () {
    makeTimer();
  }, 1000);
  // countdown

  // slick banner slider part
  $(".banner_slider").slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  });
  // slick banner slider part

  // slick destination slider part
  $(".destination_slider").slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    // fade: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // centerMode: true,
          // centerPadding: "20px",
        },
      },
    ],
  });

  // slick destination slider part

  // counter(count up)
  $(".stat-number").each(function () {
    var size = $(this).text().split(".")[1]
      ? $(this).text().split(".")[1].length
      : 0;
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 5000,
          step: function (func) {
            $(this).text(parseFloat(func).toFixed(size));
          },
        }
      );
  });
  // counter(count up)

  // client slider
  $(".slider-single").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    // adaptiveHeight: true,
    infinite: true,
    useTransform: true,
    speed: 400,
    autoplay: true,
    asNavFor: ".slider-nav",
  });

  $(".slider-nav")
    .on("init", function (event, slick) {
      $(".slider-nav .slick-slide.slick-current").addClass("is-active");
    })
    .slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      centerMode: true,
      focusOnSelect: true,
      centerPadding: "20px",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 3,
          },
        },
      ],
    });

  $(".slider-single").on("afterChange", function (event, slick, currentSlide) {
    $(".slider-nav").slick("slickGoTo", currentSlide);
    var currrentNavSlideElem =
      '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $(".slider-nav .slick-slide.is-active").removeClass("is-active");
    $(currrentNavSlideElem).addClass("is-active");
  });

  $(".slider-nav").on("click", ".slick-slide", function (event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data("slick-index");

    $(".slider-single").slick("slickGoTo", goToSingleSlide);
  });
  // client slider

  // slick destination slider part
  $(".payment_slider").slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "3px",
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // slick destination slider part

  // scroll top
  $("a[href=#top]").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      600
    );
    return false;
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".totop a").fadeIn();
    } else {
      $(".totop a").fadeOut();
    }
  });
  // scroll top

  // /product item
  $(".popular_grid").showMoreItems({
    startNum: 6,
    afterNum: 3,
    original: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          startNum: 3,
          afterNum: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          startNum: 3,
          afterNum: 3,
        },
      },
    ],
  });

  // /product item

  // slick room slider part
  $(".room_slider").slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
  // slick room slider part

  // slick banner slider part

  $(".hotel_details_slider").slick({
    asNavFor: ".hotel_item",
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    infinite: true,
    arrows: true,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
  });

  $(".hotel_item").slick({
    asNavFor: ".hotel_details_slider",
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    infinite: true,
    swipeToSlide: false,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          vertical: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          vertical: false,
        },
      },
    ],
  });

  // slick banner slider part

  // increment & decrement
  $(".increment_btn").click(function () {
    $val = $(this).parent().find("input").val();
    //Adding value ;

    $update_val = parseInt($val) + 1;
    $(this).parent().find("input").val($update_val);
  });
  $(".decrement_btn").click(function (e) {
    e.preventDefault();
    $val = $(this).parent().find("input").val();
    //minus value ;

    if ($val > 0) {
      $val--;
    }
    $(this).parent().find("input").val($val);
  });
  // increment & decrement


  // price range slider
  $(function () {
    $(".slider-range").slider({
      range: true,
      min: 1500,
      max: 10000,
      step: 100,
      values: [3000, 6000],
      slide: function (event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      },
    });
    $("#amount").val(
      "$" +
        $(".slider-range").slider("values", 0) +
        " - $" +
        $(".slider-range").slider("values", 1)
    );
  });

  // price range slider

   // date picker
   var startDate, endDate, startInstance, endInstance;
   var fillInputs = function () {
     startInstance.$elem.val(
       startDate
         ? startDate
             .locale(startInstance.config.format)
             .format(startInstance.config.format)
         : ""
     );
     endInstance.$elem.val(
       endDate
         ? endDate
             .locale(endInstance.config.format)
             .format(endInstance.config.format)
         : ""
     );
   };
   $("#caleran-ex-6-5-start").caleran({
     startEmpty: $("#caleran-ex-6-5-start").val() === "",
     startDate: $("#caleran-ex-6-5-start").val(),
     endDate: $("#caleran-ex-6-5-end").val(),
     enableKeyboard: false,
     oninit: function (instance) {
       startInstance = instance;
       if (!instance.config.startEmpty && instance.config.startDate) {
         instance.$elem.val(
           instance.config.startDate
             .locale(instance.config.format)
             .format(instance.config.format)
         );
         startDate = instance.config.startDate.clone();
       }
     },
     onbeforeshow: function (instance) {
       if (startDate) {
         startInstance.config.startDate = startDate;
         endInstance.config.startDate = startDate;
       }
       if (endDate) {
         startInstance.config.endDate = endDate.clone();
         endInstance.config.endDate = endDate.clone();
       }
       fillInputs();
       instance.updateHeader();
       instance.reDrawCells();
     },
     onfirstselect: function (instance, start) {
       startDate = start.clone();
       startInstance.globals.startSelected = false;
       startInstance.hideDropdown();
       endInstance.showDropdown();
       endInstance.config.minDate = startDate.clone();
       endInstance.config.startDate = startDate.clone();
       endInstance.config.endDate = null;
       endInstance.globals.startSelected = true;
       endInstance.globals.endSelected = false;
       endInstance.globals.firstValueSelected = true;
       endInstance.setDisplayDate(start);
       if (endDate && startDate.isAfter(endDate)) {
         endInstance.globals.endDate = endDate.clone();
       }
       endInstance.updateHeader();
       endInstance.reDrawCells();
       fillInputs();
     },
   });
   $("#caleran-ex-6-5-end").caleran({
     startEmpty: $("#caleran-ex-6-5-end").val() === "",
     startDate: $("#caleran-ex-6-5-start").val(),
     endDate: $("#caleran-ex-6-5-end").val(),
     enableKeyboard: false,
     autoCloseOnSelect: true,
     oninit: function (instance) {
       endInstance = instance;
       if (!instance.config.startEmpty && instance.config.endDate) {
         instance.$elem.val(
           instance.config.endDate
             .locale(instance.config.format)
             .format(instance.config.format)
         );
         endDate = instance.config.endDate.clone();
       }
     },
     onbeforeshow: function (instance) {
       if (startDate) {
         startInstance.config.startDate = startDate;
         endInstance.config.startDate = startDate;
       }
       if (endDate) {
         startInstance.config.endDate = endDate.clone();
         endInstance.config.endDate = endDate.clone();
       }
       fillInputs();
       instance.updateHeader();
       instance.reDrawCells();
     },
     onafterselect: function (instance, start, end) {
       startDate = start.clone();
       endDate = end.clone();
       endInstance.hideDropdown();
       startInstance.config.endDate = endDate.clone();
       startInstance.globals.firstValueSelected = true;
       fillInputs();
       endInstance.globals.startSelected = true;
       endInstance.globals.endSelected = false;
     },
   });
   // date picker
});
