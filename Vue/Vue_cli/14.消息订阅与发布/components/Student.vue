<template>
  <!-- 组件的结构 -->
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">发送学生姓名</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: "StudentName",
  data() {
    return {
      name: 'Waylon',
      sex: '男'
    };
  },
  methods: {
  sendStudentName() {
    // this.$bus.$emit('waylon', this.name)
    pubsub.publish('waylon', this.name)
  }
  },
};
</script>

<style scoped>
.student {
  background-color: pink;
  padding: 5px;
  margin-top: 30px;
}
</style>