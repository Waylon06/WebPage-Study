<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>学校名称：{{ school }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="showName">点我提示学校名：</button>
  </div>
</template>

<style>
/* 组件样式 */
.demo {
    background-color: orange;
}
</style>

<script>
// 组件交互相关的代码（数据/方法）
const school = Vue.extend({
  data() {
    return {
      school: "nice University",
      address: "China",
    };
  },
  methods: {
    showName() {
      alert(this.school);
    },
  },
});
</script>
