var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
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
function filter(active) {
  hide = document.getElementsByClassName("ss_item");
  for (i = 0; i < hide.length; i++) {
    hide[i].style.display = "none";
  }

  let show = document.getElementsByClassName(active);
  for (i = 0; i < hide.length; i++) {
    show[i].style.display = "flex";
  }
}
