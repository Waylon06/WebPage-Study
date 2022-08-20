<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ myAge }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="addAge">点我加年龄</button>
    <button @click="showName">点我展示名字</button>
    <button @click="sendStudentName">发送学生名字给App</button>
    <button @click="unbind">解绑waylon这个自定义事件</button>
    <button @click="death">销毁vc</button>
  </div>
</template>

<script>
import {mixin} from '../mixin'

// 组件交互相关的代码（数据/方法）
export default {
  name: "StudentName",
  data() {
    return {
      myAge: this.age
    };
  },
  // 简单声明接收
  // props: ['name', 'age', 'sex'],

  // 接收的同时对数据类型进行限制
  /* props: {
    name: String,
    age: Number,
    sex: String
  }, */

  // 接收的同时: 对数据类型进行限制+默认值的指定+必要值的限制
  props:{
    name: {
      type: String,  //name的数据类型
      required: true  //名字是必传的
    },
    age: {
      // type: Number,
      default: 99    //默认值
    },
    sex: {
      type: String,
      required: true
    }
  },
  methods: {
    /* showName() {
      alert(this.name);
    }, */
    addAge() {
      this.myAge++
    },
    sendStudentName() {
      // 触发Student组件实例身上的waylon事件
      this.$emit('waylon',this.name)
    },
    unbind() {
      this.$off('waylon')  //解绑一个自定义事件
      // this.$off(['waylon','xxx'])  //解绑多个自定义事件
      // this.$off()  //解绑所有的自定义事件
    },
    death() {
      this.$destroy(); //销毁了当前student组件的实例，销毁后所有Student实例的自定义事件全都不奏效
    }
  },
  mixins: [mixin]
};
</script>

<style scoped>
/* 组件样式 */
.demo {
  background-color: orange;
}
</style>