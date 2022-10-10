<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="./assets/iconfont/首页.png" alt="" />
        <img
          slot="item-icon-active"
          src="./assets/iconfont/首页1.png"
          alt=""
        />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/order">
        <img slot="item-icon" src="./assets/iconfont/订单.png" alt="" />
        <img
          slot="item-icon-active"
          src="./assets/iconfont/订单1.png"
          alt=""
        />
        <div slot="item-text">订单</div>
      </tab-bar-item>
      <tab-bar-item path="/massage">
        <img slot="item-icon" src="./assets/iconfont/消息.png" alt="" />
        <img
          slot="item-icon-active"
          src="./assets/iconfont/消息1.png"
          alt=""
        />
        <div slot="item-text">消息</div>
      </tab-bar-item>
      <tab-bar-item path="/mine">
        <img slot="item-icon" src="./assets/iconfont/我的.png" alt="" />
        <img
          slot="item-icon-active"
          src="./assets/iconfont/我的1.png"
          alt=""
        />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from "./components/tabbar/tabbar";
import TabBarItem from "./components/tabbar/tabbarItem";
export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>
<style>
@import "./assets/css/base.css";
.active {
  color: rgb(96,177,99);
}
</style>
