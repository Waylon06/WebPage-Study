window.addEventListener('load', function () {
    var shopping_info = document.querySelector('.shopping-info');
    var list_item = document.querySelector('.list-body .list-item');
    var login = document.querySelector('header .login');
    if (sessionStorage.getItem('pid') == null && sessionStorage.getItem('pid') == undefined) {
        shopping_info.innerHTML = `<div class="empty">
        <h2>您的购物车还是空的！</h2>
        <p>登录之后显示您之前加入的商品</p>
        <a href="login.html" class="login">立即登录</a>
        <a href="#" class="go-shopping">马上去购物</a>
    </div>`
    } else {
        const uinfo = JSON.parse(sessionStorage.getItem("uinfo"));
        login.innerText = 'Hi!' + uinfo.username;
        const xhr = new XMLHttpRequest();
        const xhr2 = new XMLHttpRequest();
        const xhr3 = new XMLHttpRequest();
        const url = 'http://43.138.138.11:1110/api';
        const pid = sessionStorage.getItem('pid');
        console.log(uinfo);
        xhr.open('post', url + '/' + 'order' + '/' + uinfo.userId + '/' + pid);
        // xhr.open('get', url + '/'+ 'product' + '/' + pid);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    const resp = JSON.parse(xhr.responseText);
                    if (resp.code === 200) {
                        console.log(xhr.responseText);
                        xhr2.open('get', url + '/' + 'order/' + uinfo.userId + '/1/5');
                        xhr2.send();
                        xhr2.onreadystatechange = function () {
                            if (xhr2.readyState === 4) {
                                if (xhr2.status >= 200 && xhr2.status < 300) {
                                    const info = JSON.parse(xhr2.responseText);
                                    if (info.code === 200) {
                                        const product = info.data.records;
                                        console.log(product);
                                        console.log(info.data);
                                        let item_row;
                                        // 解决累加拼接字符串的第一个为undefined的问题
                                        let a;
                                        for (let i = 0; i < product.length; i++) {
                                            // item_row +=   会出现定义前的undefined
                                            a = `<div class="item-row">
                                            <div class="col-check">
                                                <input type="checkbox" class="item-ck">
                                            </div>
                                            <div class="col-img">
                                                <a href="javascript:;">
                                                    <img src="../${product[i].product_picture}" alt="">
                                                </a>
                                            </div>
                                            <div class="col-name">
                                                <h3>
                                                    <a href="#">${product[i].product_name}</a>
                                                </h3>
                                            </div>
                                            <div class="col-price">
                                                ${product[i].product_price}元
                                            </div>
                                            <div class="col-num">
                                                <div class="change-num">
                                                    <a href="#">-</a>
                                                    <input type="text" autocomplete="off" class="goods-num">
                                                    <a href="#">+</a>
                                                </div>
                                            </div>
                                            <div class="col-total">
                                                ${product[i].product_price}元
                                            </div>
                                            <div class="col-del">
                                                <a href="#">
                                                    <i></i>
                                                </a>
                                            </div>
                                        </div>`
                                            if (i == 0) {
                                                item_row = a;
                                            }
                                            if (i > 0) {
                                                item_row = item_row + a;
                                            }
                                        }
                                        list_item.innerHTML = item_row;
                                    
                                        // 删除订单功能
                                        var dels = document.querySelectorAll('.list-body .list-item .item-row .col-del i');
                                        for (let i = 0; i < dels.length; i++) {
                                            dels[i].addEventListener('click', function () {
                                                xhr3.open('delete', url + '/order' + '/' + product[i].order_id);
                                                xhr3.send();
                                                xhr3.onreadystatechange = function () {
                                                    if (xhr3.readyState === 4) {
                                                        if (xhr3.status >= 200 && xhr3.status < 300) {
                                                            const isDel = JSON.parse(xhr3.responseText);
                                                            if (isDel.code === 200) {
                                                                console.log(isDel);
                                                            }
                                                        }
                                                    }
                                                }
                                            })
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }


    // 渲染推荐商品数据
    var ul = document.querySelector('.goods ul');
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
                for (let i = 0; i < 20; i++) {
                    // 创建li盒子
                    var lis = document.createElement('li');
                    //  创建a链接
                    let a = document.createElement('a');
                    a.href = 'javascript:;';
                    //  渲染图片
                    let img = document.createElement('img');
                    img.src = '../' + products[i].product_picture;

                    let recommend_name = document.createElement('div');
                    let recommend_price = document.createElement('div');
                    recommend_name.classList.add('recommend-name');
                    recommend_name.innerText = products[i].product_name;
                    recommend_price.classList.add('recommend-price');
                    if (products[i].product_price > products[i].product_selling_price) {
                        recommend_price.innerHTML = products[i].product_selling_price + '元';
                    } else {
                        recommend_price.innerText = products[i].product_price + '元';
                    }

                    a.appendChild(img);
                    a.appendChild(recommend_name);
                    a.appendChild(recommend_price);

                    lis.appendChild(a);

                    ul.appendChild(lis);
                }

            }
        }
    }
})