window.addEventListener('load', function () {

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


  // Ajax连接接口
  var ul = document.querySelector('.box-bd').querySelector('.right').querySelector('.first');
  var connect = new XMLHttpRequest();
  const url = 'http://43.138.138.11:1110/api/product';
  connect.open('get', url);
  connect.send();
  connect.onreadystatechange = function () {
    if (connect.readyState == 4 && connect.status == 200) {
      console.log(JSON.parse(connect.responseText));
      const resp = JSON.parse(connect.responseText);
      // Ajax渲染数据
      if (resp.code = 200) {
        const products = resp.data;
        for (let i = 0; i < 8; i++) {
          // 创建li盒子
          let lis = document.createElement('li');
          //  创建a链接
          let a = document.createElement('a');
          //  渲染图片
          let img = document.createElement('img');
          img.src = products[i].product_picture;
          // 渲染名称
          let title = document.createElement('h3');
          title.classList.add('title');
          title.innerText = products[i].product_name;
          // 渲染信息
          let desc = document.createElement('p');
          desc.classList.add('desc');
          desc.innerText = products[i].product_title;
          // 渲染价格
          let price = document.createElement('p');
          price.classList.add('price');
          price.innerText = products[i].product_price + '元';
          // 将元素加进li盒子
          lis.appendChild(img);
          lis.appendChild(title);
          lis.appendChild(desc);
          lis.appendChild(price);
          // 将li盒子放进ul里
          ul.appendChild(lis);
        }
      }
    }
  }






})
