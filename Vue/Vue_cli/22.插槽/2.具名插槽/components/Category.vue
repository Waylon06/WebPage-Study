<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <ul>
      <li v-for="(item, index) in listData" :key="index">{{ item }}</li>
    </ul>
    <!-- <img v-show="title === '美食'" src="../assets/2.webp" alt="" /> -->
    <!-- 定义一个插槽,等着组件的使用者进行填充 -->
    <slot name="center"></slot>
    <slot name="game"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "CategoryName",
  props: ["listData", "title"],
};
</script>

<style>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}

img {
    width: 100%;
}
</style>