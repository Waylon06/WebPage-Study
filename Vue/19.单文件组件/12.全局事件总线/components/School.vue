<template>
  <!-- 组件的结构 -->
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>

  </div>
</template>

<script>
export default {
  name: "SchoolName",
  data() {
    return {
      name: "nice University",
      address: "China",
    };
  },
  mounted() {
    this.$bus.$on('waylon',(data) => {
      console.log('我是school组件，收到了数据', data);
    })
  },
beforeDestroy() {
  this.$bus.$off('waylon')
},
};
</script>

<style scoped>
/* 组件样式 */
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>
