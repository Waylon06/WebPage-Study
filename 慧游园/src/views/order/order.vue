<template>
  <div>
     <header>
        <div class="title"><span>订单</span></div>
        <a class="search"></a>
    </header>
    <nav>
        <a class="all">全部</a>
        <a class="finished">已完成</a>
        <a class="incomplete">未完成</a>
        <a class="expired">已过期</a>
        <a class="refund">退款</a>
    </nav>
    <!-- The first product -->
    <section>
        <div class="table">
            <div class="product">
                <span>武汉鲜果园<i>></i></span>
                <span>交易成功</span>
            </div>
            <div class="detils">
                <div class="pic">
                    <img src="../Images/product.png" alt="">
                </div>
                <div class="info">【成人票】全天全场通票</div>
                <div class="date">04月26日 23:23下单</div>
                <div class="price"><i>￥</i>108</div>
                <div class="num">X<span>1</span></div>
            </div>
            <div class="rPrice">实际款<i>￥</i><span>100</span></div>
            <div class="service">
                <button class="ticket">开发票</button>
                <button class="moreInfo">订单详情</button>
            </div>
        </div>
    </section>
    <!-- The second product -->
    <section class="items">  
        <div class="table">
            <div class="product">
                <span>武汉鲜果园<i>></i></span>
                <span>交易成功</span>
            </div>
            <div class="detils">
                <div class="pic">
                    <img src="../Images/product.png" alt="">
                </div>
                <div class="info">【成人票】全天全场通票</div>
                <div class="date">04月26日 23:23下单</div>
                <div class="price"><i>￥</i>108</div>
                <div class="num">X<span>1</span></div>
            </div>
            <div class="rPrice">实际款<i>￥</i><span>100</span></div>
            <div class="service">
                <button class="ticket">开发票</button>
                <button class="moreInfo">订单详情</button>
            </div>
        </div>
    </section>
    <!-- The third product -->
    <section class="items">
        <div class="table">
            <div class="product">
                <span>武汉鲜果园<i>></i></span>
                <span>交易成功</span>
            </div>
            <div class="detils">
                <div class="pic">
                    <img src="../Images/product.png" alt="">
                </div>
                <div class="info">【成人票】全天全场通票</div>
                <div class="date">04月26日 23:23下单</div>
                <div class="price"><i>￥</i>108</div>
                <div class="num">X<span>1</span></div>
            </div>
            <div class="rPrice">实际款<i>￥</i><span>100</span></div>
            <div class="service">
                <button class="ticket">开发票</button>
                <button class="moreInfo">订单详情</button>
            </div>
        </div>
    </section>
    <footer>
         <div class="icon index">
            <span>首页</span>
         </div>
         <div class="icon order"> 
            <span>订单</span>
         </div>
         <div class="icon msg"> 
            <span>消息</span>
         </div>
         <div class="icon mine"> 
            <span>我的</span>
         </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "Order"
  }
</script>
<style scoped>
  div {
    box-sizing: border-box;
}

header {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fafafa;
    height: 50px;
}

.title {
    flex: 1;
    text-align: center;
    font-size: 25px;
    font-weight: 600;
    color: #1a681c;
}

.title span {
    position: relative;
    right: -30px;
}

.search {
    position: relative;
    height: 60px;
    width: 60px;
}

.search::before {
    font-family: 'icomoon';
    content: '\e986';
    position: absolute;
    font-size: 25px;
    top: 20px;
    left: 25px;

}

nav {
    display: flex;
    justify-content: space-around;
    height: 40px;
    background-color: #eeeeee;
    align-items: center;
}

nav a:first-child {
    color: #60b163;
}

section {
    display: flex;
    justify-content: center;
    background-color: #eeeeee;
}

.items {
    margin-top: 20px;
}

section::before {
    content: '';
    /* display: block; */
    width: 10px;
}

section .table {
    background-color: #fafafa;
    height: 230px;
    border-radius: 12px;
    flex: 1;
}

section::after {
    content: '';
    /* display: block; */
    width: 10px;
}

.table .product {
    display: flex;
    height: 20px;
    justify-content: space-between;
    position: relative;
    margin-top: 10px;
}

.product span:nth-child(1) {
    position: absolute;
    left: 25px;
    color: #000000;
    /* font-weight: 600; */
    position: relative;
}

.product span:nth-child(1)::before {
    position: absolute;
    top: 5px;
    left: -20px;
    font-family: 'icomoon';
    content: '\ea13';
}

.product span:nth-child(1) i {
    font-style: normal;
    color: #b1b1b1;
}

.product span:nth-child(2) {
    position: absolute;
    right: 10px;
    font-size: 14px;
    color: #60b363;
}

.table .detils {
    position: relative;
    margin-top: 15px;
    display: flex;
    justify-content: space-around;
    height: 100px;
}

.table .detils .pic {
    height: 100px;
    width: 100px;
}

.detils .pic img {
    height: 100%;
    width: 100%;
}

.table .detils .price i {
    font-style: normal;
    font-size: 10px;
}

.detils .date {
    position: absolute;
    top: 25px;
    left: 123px;
    font-size: 14px;
    color: #60b363;
}

.detils .num {
    position: absolute;
    top: 25px;
    right: 8px;
    font-size: 12px;
    color: #808080;
}


.rPrice {
    position: relative;
    text-align: right;
    right: 8px;
}

.rPrice i {
    font-style: normal;
    font-size: 10px;
}

.service {
    position: relative;
    margin-top: 20px;
    text-align: right;
}

.service button {
    height: 30px;
    width: 80px;
    background-color: #fafafa;
    border-radius: 15px;
    border: 1px solid #c7c7c7;
}

.service .ticket {
    position: absolute;
    right: 100px;
}

.service .moreInfo {
    position: absolute;
    right: 8px;
}

footer {
    display: flex;
    height: 60px;
    justify-content: space-around;
    background-color: #fafafa;
    align-items: center;
    position: sticky; 
    bottom: 0;
}

footer .icon {
    position: relative;
    display: flex;
    flex-direction: column;
    font-size: 12px;
}

footer .index::before {
    font-family: 'icomoon';
    font-size: 20px;
    content: '\e900';
}

footer .order::before {
    font-family: 'icomoon';
    font-size: 20px;
    content: '\e922';
}

footer .msg::before {
    font-family: 'icomoon';
    font-size: 20px;
    content: '\e96b';
}

footer .mine::before {
    font-family: 'icomoon';
    font-size: 20px;
    content: '\e9e7';
}


</style>