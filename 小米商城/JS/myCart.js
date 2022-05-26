window.addEventListener('load', function () {
    var shopping_info = document.querySelector('.shopping-info');
    if (sessionStorage.getItem('pid') == null && sessionStorage.getItem('pid') == undefined) {
        shopping_info.innerHTML = `<div class="empty">
        <h2>您的购物车还是空的！</h2>
        <p>登录之后显示您之前加入的商品</p>
        <a href="login.html" class="login">立即登录</a>
        <a href="#" class="go-shopping">马上去购物</a>
    </div>`
    } else {
        const xhr = new XMLHttpRequest();
        const url = 'http://43.138.138.11:1110/api';
        const uid = sessionStorage.getItem('uid');
        const pid = sessionStorage.getItem('pid');
        xhr.open('get', url + '/' + 'product' + '/' + pid);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    const resp = JSON.parse(xhr.responseText);
                    if (resp.code === 200) {
                        console.log(xhr.responseText);
                        const product = resp.data;
                        console.log(product);
                        shopping_info.innerHTML = `<div class="goods-list">
                        <div class="list-head">
                            <div class="all-checked">
                                <input type="checkbox" class="ck">
                                全选
                            </div>
                            <div class="nbsp">&nbsp;</div>
                            <div class="col-name">商品名称</div>
                            <div class="col-price">单价</div>
                            <div class="col-num">数量</div>
                            <div class="col-total">小计</div>
                            <div class="col-del">操作</div>
                        </div>
                        <div class="list-body">
                            <div class="list-item">
                                <div class="item-row">
                                    <div class="col-check">
                                        <input type="checkbox" class="item-ck">
                                    </div>
                                    <div class="col-img">
                                        <a href="javascript:;">
                                            <img src="../${product.product_picture}" alt="">
                                        </a>
                                    </div>
                                    <div class="col-name">
                                        <h3>
                                            <a href="#">${product.product_name}</a>
                                        </h3>
                                    </div>
                                    <div class="col-price">
                                    ${product.product_selling_price}元
                                    </div>
                                    <div class="col-num">
                                        <div class="change-num">
                                            <a href="#">-</a>
                                            <input type="text" autocomplete="off" class="goods-num">
                                            <a href="#">+</a>
                                        </div>
                                    </div>
                                    <div class="col-total">
                                        ${product.product_selling_price}元
                                    </div>
                                    <div class="col-del">
                                        <a href="#">
                                            <i></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="cart-bar">
                                <section class="left">
                                    <a href="#">继续购物</a>
                                    <span>
                                        已选择
                                        <i>1</i>
                                        件
                                    </span>
                                </section>
                                <div class="total-price">
                                    合计：
                                    <em>${product.product_selling_price}</em>
                                    元
                                    <a href="#">去结算</a>
                                </div>
                            </div>
                        </div>
                    </div>`
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