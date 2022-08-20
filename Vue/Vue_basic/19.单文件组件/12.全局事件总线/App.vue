<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <School/>
    <Student/>
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
}
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 5px;
}
</style>