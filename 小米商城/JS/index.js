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
          // 为a赋值上超链接
          // a.href = 'javascript:;';
          a.href = 'Views/shopping.html'
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
          if (products[i].product_price > products[i].product_selling_price) {
            price.classList.add('price');
            price.innerHTML = products[i].product_selling_price + '元&nbsp;';
            let del = document.createElement('del');
            del.innerText = products[i].product_price + '元';
            price.appendChild(del);
          } else {
            price.classList.add('price');
            price.innerText = products[i].product_price + '元';
          }
          // 将元素加进a链接里
          a.appendChild(img);
          a.appendChild(title);
          a.appendChild(desc);
          a.appendChild(price);
          // 将a链接放进li盒子里
          lis.appendChild(a);
          // 将li盒子放进ul里
          ul.appendChild(lis);
        }
        var lis = document.querySelectorAll('.box-bd .right .first li');
        // console.log(lis);
        for (let i = 0; i < lis.length; i++) {
          lis[i].addEventListener('click', function () {
            // alert(11);
            // console.log(products);
            // console.log(products[i].product_id);
            sessionStorage.setItem('pid', products[i].product_id);
          })
        }
      }
    }
  }


  // 登录后展示用户信息
  var top_info = document.querySelector('.top-info');
  // var uinfo = sessionStorage.getItem(JSON.parse('uinfo'));
  const uinfo = JSON.parse(sessionStorage.getItem("uinfo"))
  console.log(uinfo);
  // const user = sessionStorage.getItem(uinfo.username);
  // if (user != null && user != undefined) {
  //   top_info.innerHTML = `Hi! ${user}
  //      <span>|</span>
  //     <a href="#">消息通知</a>`
  // }
    if (uinfo != null && uinfo != undefined) {
    top_info.innerHTML = `Hi! ${uinfo.username}
       <span>|</span>
      <a href="#">消息通知</a>`
  }



})
