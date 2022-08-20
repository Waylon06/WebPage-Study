<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showElement">tap me to show the element which is under this button</button>
        <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName"></School>

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第一种写法，使用 @ 或 v-on) -->
    <Student name="Waylon" age="18" sex="man" v-on:waylon="getStudentName"></Student>

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第二种写法，使用 ref) -->
    <!-- <Student ref="student"></Student> -->
  </div>
</template>

<script>
import School from './components/School.vue';
import Student from './components/Student.vue';
export default {
    name: 'App',
    components: {
        School,
        Student
    },
    data() {
      return {
        msg: 'Welcoe to here'
      }
    },
    methods: {
      showElement() {
        console.log(this.$refs.title);
      },
      getSchoolName(name) {
        console.log('App收到了学校名字', name);
      },
      getStudentName(name) {
        console.log('我被发现啦', name);
        console.log('App收到了学生名', name);
      }
    },
    /* mounted() {
      this.$refs.student.$on('waylon', this.getStudentName);
    }, */
}
</script>

<style>

</style>