window.addEventListener('load', function () {
    const url = 'http://43.138.138.11:1110/api';
    var shopping_info = document.querySelector('.shopping-info');
    var list_item = document.querySelector('.list-body .list-item');
    var login = document.querySelector('header .login');
    var uinfo = JSON.parse(sessionStorage.getItem("uinfo"));
    // login.innerText = 'Hi!' + uinfo.username;
    // 判断是否成功的从浏览器中获取到用户信息
    if (uinfo == null && uinfo == undefined) {
        shopping_info.innerHTML = `<div class="empty">
        <h2>您的购物车还是空的！</h2>
        <p>登录之后显示您之前加入的商品</p>
        <a href="login.html" class="login">立即登录</a>
        <a href="#" class="go-shopping">马上去购物</a>
    </div>`
    } else {
        // 将用户名展示到购物车中
        login.innerText = 'Hi!' + uinfo.username;
        var product;
        // 判断分页是否为空 分页按钮是否能继续点击
        var isEmpty = true;
        const xhr = new XMLHttpRequest();
        // const url = 'http://43.138.138.11:1110/api';
        const pid = sessionStorage.getItem('pid');
        console.log(uinfo);
        var paging = document.querySelector('.list-body .cart-bar .paging input');
        // value值就是获取的元素所展示的内容 设置为1表明正在第一页 也给下面分页接口提供值
        paging.value = 1;
        // 当用户直接从主页面进来,没有经过商品详情页时 没有在浏览器中储存pid 就直接将后台之前已经加入购物车的商品渲染出来
        if (pid == null && pid == undefined) {
            newPage();
        } else {
            // 连接将商品添加进购物车的接口
            xhr.open('post', url + '/' + 'order' + '/' + uinfo.userId + '/' + pid);
            // xhr.open('get', url + '/'+ 'product' + '/' + pid);
            xhr.send();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        const resp = JSON.parse(xhr.responseText);
                        if (resp.code === 200) {
                            console.log(xhr.responseText);
                            newPage();
                        }
                    }
                }
            }
        }
    }

    // 刷新购物车 
    function newPage() {
        const xhr2 = new XMLHttpRequest();
        // 分页接口
        xhr2.open('get', url + '/' + 'order/' + uinfo.userId + '/' + paging.value + '/5');
        xhr2.send();
        xhr2.onreadystatechange = function () {
            if (xhr2.readyState === 4) {
                if (xhr2.status >= 200 && xhr2.status < 300) {
                    let info = JSON.parse(xhr2.responseText);
                    if (info.code === 200) {
                        product = info.data.records;
                        // console.log(product);
                        // console.log(info.data);
                        let item_row;
                        // 解决累加拼接字符串的第一个为undefined的问题
                        let a;
                        // 数组对象去重
                        var arr = [];
                        for (let i = 0; i < product.length; i++) {
                            // 同样的商品计数
                            arr[i] = 1;
                            for (let j = i + 1; j < product.length; j++) {
                                if (product[i].product_name == product[j].product_name) {
                                    // 如果两个商品名字一样就对该商品的数量加一
                                    arr[i]++;
                                    // 数组的删除方法，第一个参数为第一项位置（索引号），第二个参数为要删除几个。
                                    product.splice(j, 1);
                                    // 因为数组中的一条数据被删除，所以要重新从i+1开始去重
                                    j--;
                                }
                            }
                        }

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
                                <a href="javascript:;" class="reduce">-</a>
                                <input type="text" autocomplete="off" class="goods-num" value="1">
                                <a href="javascript:;" class="add">+</a>
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

                        // 数量加减按钮
                        var reduce = document.querySelectorAll('.col-num .change-num .reduce');
                        // console.log(reduce);
                        var num = document.querySelectorAll('.col-num .change-num .goods-num');
                        var add = document.querySelectorAll('.col-num .change-num .add');
                        for (let i = 0; i < product.length; i++) {
                            num[i].value = arr[i];
                            reduce[i].addEventListener('click', function () {
                                if (num[i].value == 1) {
                                    alert('莫点我了，我是计数的，没有删除功能');
                                } else {
                                    num[i].value--;
                                }
                            });
                            add[i].addEventListener('click', function () {
                                if (num[i].value >= 2) {
                                    alert('还点?你钱够吗');
                                    num[i].value++;
                                } else {
                                    num[i].value++;
                                }
                            })

                        }

                        // 全选反选
                        var checkall = document.querySelector('.goods-list .list-head .all-checked .ck');
                        var cks = document.querySelectorAll('.col-check .item-ck');
                        // 总价
                        var price = document.querySelector('.cart-bar .total-price .price');
                        // 件数计算
                        var amounts = document.querySelector('.cart-bar .left span .amount');
                        // 给全选框加入点击事件监听
                        checkall.addEventListener('click', function () {
                            // 设置总价为0
                            let total_price = 0;
                            for (let i = 0; i < cks.length; i++) {
                                 // 使用for循环将每个单选框状态改为与全选框一样
                                cks[i].checked = this.checked;
                                // 对全选进行判断 如果全选框被选中(值为true)
                                if (checkall.checked == true) {
                                    // 将每个商品的单价与数量乘起来并且赋值给总价
                                    total_price += product[i].product_price * num[i].value;
                                    // 当全选框为true的时候 每个商品都是处于被选中状态 所以 选中的商品数量应该与本页商品总数量一样(也就是单选框的个数)
                                    amounts.innerText = cks.length;
                                } else {
                                    // 因为这是全选框的点击事件 所以并不会出现 有单选框是被勾选的状态 所以如果全选的值为false就将总价变为0
                                    amounts.innerText = 0;
                                }
                                // 将总价赋值到页面
                                price.innerText = total_price;
                            }
                        })
                        // 用for循环给每个单选框添加点击事件

                        for (let i = 0; i < cks.length; i++) {
                            cks[i].addEventListener('click', function () {
                                // 设置一个计算被选中商品总数的变量
                                let amount = cks.length;
                                let total_price = 0;
                                // 设置一个变量判断全选框是否应该被勾选
                                let isAll = true;
                                // 内部嵌套一个for循环判断每个单选框的状态
                                for (let j = 0; j < cks.length; j++) {
                                    if (!cks[j].checked) {
                                        // 当单选框未被选中时
                                        // 全选框不能被选中
                                        isAll = false;
                                        // 被选中商品的数量减1
                                        amount--;
                                    } else {
                                        // 被选中就将价格相加赋值给总价
                                        total_price += product[j].product_price * num[j].value;
                                    }
                                    // 将全选框是否应该被选中的结果赋给全选框
                                    checkall.checked = isAll;
                                }
                                // 将被选中的数量与总价展示到页面
                                amounts.innerText = amount;
                                price.innerText = total_price;
                            })
                        }
                        // 1.当页数小于或者等于1 item_row == undefined表示页面无商品 
                        // 2.当在页数输入框内输入了页数 且页数大于1 页面无商品
                        // 3.点击了下一页 但页面无商品
                        if (paging.value <= 1 && isEmpty == true && item_row == undefined) {
                            shopping_info.innerHTML = `<div class="empty">
                                    <h2>您的购物车还是空的！</h2>
                                    <p>登录之后显示您之前加入的商品</p>
                                    <a href="../index.html" class="login">马上去购物</a>
                                </div>`
                        }else if(paging.value > 1 && isEmpty == true && item_row == undefined) {
                            paging.value--;
                            newPage();
                        }
                        else if(isEmpty == false && item_row == undefined){
                            paging.value--;
                            newPage();
                            alert('哥别点了，这是最后一页了，不能再多了');
                        }
                        delOrder();
                        // console.log('渲染成功');
                    }
                }
            }
        }
    }

    var prev = document.querySelector('.list-body .cart-bar .paging .prev');
    var next = document.querySelector('.list-body .cart-bar .paging .next');

    prev.addEventListener('click', function () {
        if (paging.value == 1) {
            alert('减减减，还减，都0了你还减，你数学体育老师教的吗')
        } else {
            paging.value--;
            newPage();
        }
    })
    next.addEventListener('click', function () {
            paging.value++;
            isEmpty = false;
            newPage();
    })
    // 当分页页数输入框失去焦点时
    paging.onblur = function () {
        isEmpty = true;
        newPage();
    }


    // 删除订单功能
    function delOrder() {
        const xhr3 = new XMLHttpRequest();
        var dels = document.querySelectorAll('.list-body .list-item .item-row .col-del i');
        for (let i = 0; i < dels.length; i++) {
            dels[i].addEventListener('click', function () {
                // 连接删除商品接口
                xhr3.open('delete', url + '/order' + '/' + product[i].order_id);
                xhr3.send();
                xhr3.onreadystatechange = function () {
                    if (xhr3.readyState === 4) {
                        if (xhr3.status >= 200 && xhr3.status < 300) {
                            const isDel = JSON.parse(xhr3.responseText);
                            if (isDel.code === 200) {
                                console.log(isDel);
                                isEmpty = true;
                                newPage();
                            }
                        }
                    }
                }
            })
        }
    }


    // 渲染推荐商品数据
    var ul = document.querySelector('.goods ul');
    var connect = new XMLHttpRequest();
    // const url = 'http://43.138.138.11:1110/api/product';
    connect.open('get', url + '/product');
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