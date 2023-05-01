var swiper = new Swiper(".testimonialSL", {
  slidesPerView: 1.9,
  spaceBetween: 30,
  centeredSlides: true,
  initialSlide: 1,
  // loop: true,
  navigation: {
    nextEl: ".testimonial-next",
    prevEl: ".testimonial-prev",
  },
});

var swiper = new Swiper(".logoSlider", {
  slidesPerView: 5,
  spaceBetween: 30,
  autoPlay: true,
  loop: true,
});

var swiper = new Swiper(".careerSlider", {
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  initialSlide: 1,
});

// FOR RESUME CATEGORY ACTIVE BUTTON
$(".service-show-link").on("click", function () {
  $(".service-show-link").removeClass("active");
  $(this).addClass("active");
});

// FOR RESUME CATEGORY ACTIVE CONTENT
function filterService(active) {
  hide = document.getElementsByClassName("ss_item");
  for (i = 0; i < hide.length; i++) {
    hide[i].style.display = "none";
  }

  let show = document.getElementsByClassName(active);
  for (i = 0; i < show.length; i++) {
    show[i].style.display = "flex";
  }

  const locationMapIm = document.querySelector(".career-show-img img");

  switch (active) {
    case "general":
      locationMapIm.src = "assets/img/contact/3.png";
      break;
    case "cosmetic":
      locationMapIm.src = "assets/img/contact/7.png";
      break;
    case "restorative":
      locationMapIm.src = "assets/img/contact/8.png";
      break;
    case "specialist":
      locationMapIm.src = "assets/img/contact/9.png";
      break;
    default:
      locationMapIm.src = "assets/img/contact/3.png";
      break;
  }
}

// FOR RESUME CATEGORY ACTIVE CONTENT
function filter(active) {
  hide = document.getElementsByClassName("location-area");
  for (i = 0; i < hide.length; i++) {
    hide[i].style.display = "none";
  }

  let show = document.getElementsByClassName(active);
  for (i = 0; i < show.length; i++) {
    show[i].style.display = "block";
  }
  // Change the location map image based on the active location
  const locationMapIm = document.querySelector(".location-map-im img");
  switch (active) {
    case "dallas":
      locationMapIm.src = "assets/img/location/2.png";
      break;
    case "garland":
      locationMapIm.src = "assets/img/location/3.png";
      break;
    case "mesquite":
      locationMapIm.src = "assets/img/location/4.png";
      break;
    case "east_dallas":
      locationMapIm.src = "assets/img/location/4.png";
      break;
    default:
      locationMapIm.src = "assets/img/location/2.png";
      break;
  }
}
// FOR RESUME CATEGORY ACTIVE BUTTON
$(".location-tab").on("click", function () {
  $(".location-tab").removeClass("active");
  $(this).addClass("active");
});

// ===============================faq============
// FOR FAQ SECTION ACCORDION
$(function ($) {
  var panels = $(".faq__ans").hide();
  panels.first().show();

  $(".faq__que").click(function () {
    var $this = $(this);
    panels.slideUp();
    $this.next().slideDown();
  });
});

$(".faq__que").click(function () {
  $(".faq__que span").addClass("icon-plus");
  $(this.children[1]).removeClass("icon-plus");
  $(this.children[1]).addClass("icon-Minus");
});

// FOR NAVBAR FIXED WHEN SCROLL
$(window).on("scroll", function () {
  var scrolling = $(this).scrollTop();
  if (scrolling > 30) {
    $(".main-header").addClass("navbar-fixed");
  } else {
    $(".main-header").removeClass("navbar-fixed");
  }
});

// FOR CURRENT PAGE ACTIVE NAVBAR
$(function () {
  var url = window.location.href;
  url = url.substring(
    0,
    url.indexOf("#") == -1 ? url.length : url.indexOf("#")
  );
  url = url.substring(
    0,
    url.indexOf("?") == -1 ? url.length : url.indexOf("?")
  );
  url = url.substr(url.lastIndexOf("/") + 1);

  if (url == "") {
    url = "index.html";
  }
  $(".menu-list li").each(function () {
    var href = $(this).find("a").attr("href");
    if (url == href) {
      $(this).addClass("active");
    }
  });
});
