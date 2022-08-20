<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition :appear="true" name="waylon">
      <!-- .waylon-enter-active .waylon-leave-active
      根据标签的name属性来获得类名区别，没有name属性就默认为v -->
      <h1 v-show="isShow">Hello World!</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Test2Name",
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

/* .v-enter-active {
}

.v-leave-active {
} */

/* 进入的起点 , 离开的重点*/
.waylon-enter,
.waylon-leave-to {
  transform: translateX(-100%);
}

.waylon-enter-active,
.waylon-leave-active {
  transition: 0.5s linear;
}

/* 进入的终点，离开的起点 */
.waylon-enter-to,
.waylon-leave {
  transform: translateX(0);
}

/* 离开的起点 */
/* .waylon-leave {
  transform: translateX(0);
} */

/* 的终点 */
/* .waylon-leave-to {
  transform: translateX(-100%);
} */
</style>