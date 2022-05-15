window.addEventListener('load', function () {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // 侧边导航栏
  var sideNav = document.querySelector('.side-nav').querySelector('ul').querySelectorAll('li');
  for (let i = 0; i < sideNav.length; i++) {
    sideNav[i].addEventListener('mouseenter', function() {
      for (let k = 0; k < sideNav.length; k++) {
        sideNav[k].style.backgroundColor = '';
      }
      sideNav[i].style.backgroundColor = '#ff6700';
    });
  }
  for (let i = 0; i < sideNav.length; i++) {
    sideNav[i].addEventListener('mouseleave', function() {
      for (let k = 0; k < sideNav.length; k++) {
        sideNav[k].style.backgroundColor = '';
        
      }
    })
    
  }
})
