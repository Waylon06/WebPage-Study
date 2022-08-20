<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <!-- 定义一个插槽,等着组件的使用者进行填充 -->
    <slot :games="games"></slot>
  </div>
</template>

<script>
export default {
  name: "CategoryName",
  props: ["listData", "title"],
  data() {
    return {
      games: ["红色警戒", "穿越火线", "劲舞团"],
    };
  },
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