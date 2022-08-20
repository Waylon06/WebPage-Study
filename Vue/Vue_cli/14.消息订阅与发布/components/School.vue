<template>
  <!-- 组件的结构 -->
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>

  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: "SchoolName",
  data() {
    return {
      name: "nice University",
      address: "China",
    };
  },
  mounted() {
    /* this.$bus.$on('waylon',(data) => {
      console.log('我是school组件，收到了数据', data);
    }) */
    this.pubId = pubsub.subscribe('waylon', (msgName, data) => {
      console.log('有人发布了waylon消息，waylon消息的回调执行了',msgName, data);
    })
  },
beforeDestroy() {
  // this.$bus.$off('waylon')
  pubsub.unsubscribe(this.pubId)
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
