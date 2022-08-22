<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h3>当前求和放大10倍后为：{{ bigSum }}</h3>
    <h3>我在{{ school }}上{{ subject }}大学</h3>
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
import { mapState, mapGetters } from "vuex";
export default {
  name: "CountName",
  data() {
    return {
      num: 1,
    };
  },
  computed: {
    // 靠程序员亲自去写计算属性
    /* sum() {
      return this.$store.state.sum;
    },
    school() {
      return this.$store.state.school;
    },
    subject() {
      return this.$store.state.subject;
    }, */

    // 借助mapState 生成计算属性，从state中读取数据 （对象写法）
    // ...mapState({sum: 'sum', school: 'school',subject: 'subject'}),
    // 借助mapState 生成计算属性，从state中读取数据 （数组写法）
    ...mapState(["sum", "school", "subject"]),

    /* ************************************ */

    /* bigSum() {
      return this.$store.getters.bigSum;
    }, */

    // 借助mapGetters 生成计算属性，从state中读取数据 （对象写法）
    // ...mapGetters({bigSum: 'bigSum'})
    // 借助mapGetters 生成计算属性，从state中读取数据 （数组写法）
    ...mapGetters(["bigSum"]),
  },
  methods: {

    plus() {
      this.$store.commit("PLUS", this.num);
    },
    decrement() {
      this.$store.commit("DECREMENT", this.num);
    },
  

    plusOdd() {
      this.$store.dispatch("plusOdd", this.num);
    },
    plusWait() {
      this.$store.dispatch("plusWait", this.num);
    },

 
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