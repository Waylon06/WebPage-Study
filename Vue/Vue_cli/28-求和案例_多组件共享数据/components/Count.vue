<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h3>当前求和放大10倍后为：{{ bigSum }}</h3>
    <h3>我在{{ school }}上{{ subject }}大学</h3>
    <h3>Person组件的总人数为：{{personList.length}}</h3>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="plus(num)">+</button>
    <button @click="decrement(num)">-</button>
    <button @click="plusOdd(num)">当前求和为奇数再加</button>
    <button @click="plusWait(num)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "CountName",
  data() {
    return {
      num: 1,
    };
  },
  computed: {

    // 借助mapState 生成计算属性，从state中读取数据 （数组写法）
    ...mapState(["sum", "school", "subject", "personList"]),

    // 借助apGetters 生成计算属性，从state中读取数据 （数组写法）
    ...mapGetters(["bigSum"]), 
  },
  methods: {
    //借助mapMutations生成对应方法，方法中会调用commit去联系mutations（对象写法）
    // 如果使用以下方法实现，就需要在标签内绑定事件时的函数变为带参函数
    ...mapMutations({ plus: "PLUS", decrement: "DECREMENT" }),

    //借助mapActions生成对应方法，方法中会调用dispatch去联系actions（数组写法）
    ...mapActions(["plusOdd", "plusWait"]),
  },
  mounted() {
    const x = mapState({ sum: "sum", school: "school", subject: "subject" });
    console.log(x);
  },
};
</script>

<style>
button {
  margin-left: 5px;
}
</style>