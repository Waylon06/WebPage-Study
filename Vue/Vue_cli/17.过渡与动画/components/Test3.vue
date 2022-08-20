<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition :appear="true" 
    name="animate__animated animate__bounce"
    enter-active-class="animate__swing"
    leave-active-class="animate__backOutUp"
    >
      <!-- .waylon-enter-active .waylon-leave-active
      根据标签的name属性来获得类名区别，没有name属性就默认为v -->
      <h1 v-show="isShow">Hello World!</h1>
    </transition>
  </div>
</template>

<script>
import 'animate.css'
export default {
  name: "Test3Name",
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
  /* transition: 0.5s linear; */
}

</style>