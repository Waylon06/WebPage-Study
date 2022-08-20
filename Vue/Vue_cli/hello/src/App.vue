<template>
  <div class="container">
    <Category title="美食" :listData="foods">
      <img src="./assets/2.webp" alt="">
    </Category>
    <Category title="游戏" :listData="games"/>
    <Category title="电影" :listData="films"/>
  </div>
</template>

<script>
import Category from "./components/Category.vue";

export default {
  name: "App",
  components: { Category },
  data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾"],
      games: ["红色警戒", "穿越火线", "劲舞团"],
      films: ["《教父》", "《拆弹专家》", "《你好，李焕英》"],
    };
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
}

h3 {
  text-align: center;
  background-color: orange;
}
</style>
