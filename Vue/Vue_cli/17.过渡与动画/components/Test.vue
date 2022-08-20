<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition :appear="true">  
        <!-- .v-enter-active   .v-leave-active  根据标签的name属性来获得类名区别，没有name属性就默认为v -->
      <h1 v-show="isShow">Hello World!</h1>
      <!-- 如果有多个元素需要过渡，就需要使用到<transition-group>元素，且每个子标签都得有自己的key值 -->
    </transition>
  </div>
</template>

<script>
export default {
  name: "TestName",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: orange;
}

.v-enter-active {
  animation: waylon 1s linear;
}

.v-leave-active {
  animation: waylon 1s reverse;
}

@keyframes waylon {
  from {
    /* transform: translateX(-300px); */
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>