<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>学校名称：{{name | mySlice}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click="showName">点我提示学校名：</button>
  </div>
</template>

<script>
// 引入一个混合
import {mixin} from '../mixin'
// 组件交互相关的代码（数据/方法）
export default {
  name: "SchoolName",
  data() {
    return {
      name: "nice University",
      address: "China",
    };
  },
  methods: {
    /* showName() {
      alert(this.school);
    }, */
  },
  mixins: [mixin]
};
</script>

<style>
/* 组件样式 */
.demo {
  background-color: orange;
}
</style>
