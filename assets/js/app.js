var swiper = new Swiper(".mySwiper", {
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

var swiper = new Swiper(".careerSlider", {
  slidesPerView: 3,
  spaceBetween: 30,
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
  for (i = 0; i < hide.length; i++) {
    show[i].style.display = "flex";
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
      locationMapIm.src = "https://via.placeholder.com/500x300";
      break;
    case "mesquite":
      locationMapIm.src = "https://via.placeholder.com/400x200";
      break;
    case "east_dallas":
      locationMapIm.src = "https://via.placeholder.com/600x400";
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
