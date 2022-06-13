window.addEventListener('load', function () {
  // First-Swiper
    var swiper = new Swiper(".firstSwiper", {
      speed:3000,
      loop: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
      
      // Second-Swiper
      var swiper = new Swiper(".secondSwiper", {
        slideToClickedSlide: true,
        loop: true,
        autoplay: true,
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
      

      var select = document.querySelector('.select-box');
      var btn = document.querySelector('.btn');
      var ipt =document.querySelector('.ipt');
      btn.addEventListener('click', function() {
        console.log(select.options[select.selectedIndex].value);
        let id = select.options[select.selectedIndex].value;
        sessionStorage.setItem('cid',id);
        sessionStorage.setItem('title', ipt.value);
        window.location.href = 'View/books.html';
      })

  var log_info = document.querySelector('.login span a');
      if (sessionStorage.getItem('name') != null && sessionStorage != undefined) {
        log_info.innerText = sessionStorage.getItem('name');
      }
})