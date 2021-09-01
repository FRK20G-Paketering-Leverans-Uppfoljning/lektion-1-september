<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ExerciseTwo msg="Welcome to Your Vue.js App" />
    <ExerciseThree />
    <ExerciseFive />
  </div>
</template>

<script>
import ExerciseTwo from './components/ExerciseTwo.vue';
import ExerciseThree from './components/ExerciseThree.vue';
import ExerciseFive from './components/ExerciseFive.vue';

export default {
  name: 'App',
  components: {
    ExerciseTwo,
    ExerciseThree,
    ExerciseFive
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
