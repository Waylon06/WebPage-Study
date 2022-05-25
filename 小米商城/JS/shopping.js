window.addEventListener("load", function () {
    // console.log(sessionStorage.getItem('pid'));
    var product_left = document.querySelector('.product .product-left');
    var phone_info = document.querySelector('.product .product-info .phone-info');

    // Ajax连接接口
    const xhr = new XMLHttpRequest();
    const url = 'http://43.138.138.11:1110/api/product';
    xhr.open('get', url + '/' + sessionStorage.getItem('pid'));
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                const resp = JSON.parse(xhr.responseText);
                if (resp.code === 200) {
                    const product = resp.data;
                    console.log(product);
                    // let product_left = document.createElement('div');
                    // product_left.classList.add('product-left');
                    let img = document.createElement('img');
                    img.src = '../' + product.product_picture;

                    let h2 = document.createElement('h2');
                    h2.innerText = product.product_name;

                    let sale_dec = document.createElement('p');
                    // let font = document.createElement('font');
                    sale_dec.classList.add('sale-dec');
                    sale_dec.innerHTML = '<font>' + product.product_title + '</font>' + product.product_intro;

                    let ad = document.createElement('p');
                    ad.classList.add('ad');
                    ad.innerText = '小米自营';

                    let price = document.createElement('div');
                    // price.classList.add('price');
                    if (product.product_price > product.product_selling_price) {
                        price.classList.add('price');
                        price.innerHTML = product.product_selling_price + '元';
                        let del = document.createElement('del');
                        del.innerText = product.product_price + '元';
                        price.appendChild(del);
                    } else {
                        price.classList.add('price');
                        price.innerText = product.product_price + '元';
                    }
                    console.log(product_left);
                    console.log(phone_info);
                    product_left.appendChild(img);
                    phone_info.appendChild(h2);
                    phone_info.appendChild(sale_dec);
                    phone_info.appendChild(ad);
                    phone_info.appendChild(price);

                }
                else {
                    alert(resp.msg);
                }
            }
        }
    }

      // 登录后展示用户信息
  var top_info = document.querySelector('.top-info');
  const user = sessionStorage.getItem('user');
  if (user != null && user != undefined) {
    top_info.innerHTML = `Hi! ${user}
       <span>|</span>
      <a href="#">消息通知</a>`
  }
})