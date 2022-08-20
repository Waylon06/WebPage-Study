<template>
  <div class="container">
    <Category title="游戏">
      <!-- 子组件通过slot传值必须得用<template> -->
      <template scope="waylon">
        <!-- {{waylon.games}} -->
        <ul>
          <li v-for="(game, index) in waylon.games" :key="index">{{ game }}</li>
        </ul>
      </template>
    </Category>

    <Category title="游戏">
     <template scope="{games}">
        <ol>
          <li style="color: red;" v-for="(game, index) in games" :key="index">{{ game }}</li>
        </ol>
      </template>
    </Category>

    <Category title="游戏">
      <!-- slot-scope属性与scope属性一样，只是新旧的API而已 -->
      <template slot-scope="{games}">
      <h4 v-for="(game, index) in games" :key="index">{{ game }}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";

export default {
  name: "App",
  components: { Category },
};
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
}

h3 {
  text-align: center;
  background-color: orange;
}
</style>
