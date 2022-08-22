<template>
  <div>
    <h1>当前求和为：{{ $store.state.sum }}</h1>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="plus">+</button>
    <button @click="decrement">-</button>
    <button @click="plusOdd">当前求和为奇数再加</button>
    <button @click="plusWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: "CountName",
  data() {
    return {
      num: 1,
    };
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
};
</script>

<style>
button {
  margin-left: 5px;
}
</style>