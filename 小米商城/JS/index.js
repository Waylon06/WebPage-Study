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
    autoplay: true,
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
  // 实例化XMLHttpRequest()对象
  var connect = new XMLHttpRequest();
  // 将接口链接赋给url
  const url = 'http://43.138.138.11:1110/api/product';
  // Ajax的open方法设置和服务器交互的信息
  connect.open('get', url);
  // Ajax的send()方法设置发送的数据和服务器的交互信息
  connect.send();
  // onreadystatechange是每当 readyState 属性改变时，就会调用该函数。
  connect.onreadystatechange = function () {
    // readyState 存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。
    // status http协议状态码
    if (connect.readyState == 4 && connect.status == 200) {
      console.log(JSON.parse(connect.responseText));
      // JSON.parse()可以解析json格式的数据，将格式完好的json字符串转换为json对象
      const resp = JSON.parse(connect.responseText);
      // Ajax渲染数据
      // resp.code == 200 为后台返回的code数据 200 为后台返回的成功数据
      if (resp.code == 200) {
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
          // 添加类名
          title.classList.add('title');
          // 修改内容
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
          // 将将创建的元素加进a链接里
          a.appendChild(img);
          a.appendChild(title);
          a.appendChild(desc);
          a.appendChild(price);
          // 将a链接放进li盒子里
          lis.appendChild(a);
          // 将li盒子放进ul里
          ul.appendChild(lis);
        }
        // 获取元素
        var lis = document.querySelectorAll('.box-bd .right .first li');
        // console.log(lis);
        for (let i = 0; i < lis.length; i++) {
          // 对每个获取的li元素添加点击事件监听,有点击则执行后面的方法
          lis[i].addEventListener('click', function () {
            // alert(11);
            // console.log(products);
            // console.log(products[i].product_id);
            // localStorage：生命周期是永久的，关闭页面和浏览器之后，localStorage中的数据也不会消失，除非主动的手动删除数据，否则数据永远不会消失。
            // sessionStorage：为每一个数据源维持一个存储区域，在浏览器打开期间存在，包括页面的重新加载。关闭浏览器之后就会消失。
            // 使用sessionStorage将商品id存到浏览器里,为后面商品详情页展示的商品信息做铺垫
            sessionStorage.setItem('pid', products[i].product_id);
          })
        }
      }
    }
  }


  // 登录后展示用户信息
  var top_info = document.querySelector('.top-info');
  // var uinfo = sessionStorage.getItem(JSON.parse('uinfo'));
  // const 定义的变量存储的数据数值不能改变，也就是const定义的变量，不能重复赋值。
  const uinfo = JSON.parse(sessionStorage.getItem("uinfo"))
  console.log(uinfo);
  // const user = sessionStorage.getItem(uinfo.username);
  // if (user != null && user != undefined) {
  //   top_info.innerHTML = `Hi! ${user}
  //      <span>|</span>
  //     <a href="#">消息通知</a>`
  // }
    if (uinfo != null && uinfo != undefined) {
      // innerHTML 与 innerText的区别是一个可以识别出HTML标签,一个只能识别为文本
    top_info.innerHTML = `Hi! ${uinfo.username}
       <span>|</span>
      <a href="#">消息通知</a>` 
  }



})
