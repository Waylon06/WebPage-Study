<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showElement">tap me to show the element which is under this button</button>
    <School></School>
    <Student name="Waylon" age="18" sex="man"></Student>
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
    methods: {
      showElement() {
        console.log(this.$refs.title);
      }
    },
}
</script>

<style>

</style>