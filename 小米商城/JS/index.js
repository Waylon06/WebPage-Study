window.addEventListener('load', function () {


  // Ajax连接接口
  var connect = new XMLHttpRequest();
  connect.open('get', 'http://43.138.138.11:1110/api/product');
  connect.send();
  connect.onreadystatechange = function () {
    if (connect.readyState == 4 && connect.status == 200) {
      console.log(JSON.parse(connect.responseText));
    }
  }

  // swiper轮播图
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
    sideNav[i].addEventListener('mouseenter', function () {
      for (let k = 0; k < sideNav.length; k++) {
        sideNav[k].style.backgroundColor = '';
      }
      sideNav[i].style.backgroundColor = '#ff6700';
    });
  }
  for (let i = 0; i < sideNav.length; i++) {
    sideNav[i].addEventListener('mouseleave', function () {
      for (let k = 0; k < sideNav.length; k++) {
        sideNav[k].style.backgroundColor = '';

      }
    })

  }
})
