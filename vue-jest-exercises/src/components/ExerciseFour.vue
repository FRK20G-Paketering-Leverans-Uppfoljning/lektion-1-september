<template>
  <section>
    <input type="text" v-model="text" />
    <p>{{ capitalized }}</p>
  </section>
</template>

<script>
export default {
  name: 'ExerciseFour',
  data() {
    return {
      text: ''
    }
  },
  computed: {
    capitalized() {
      return this.text.charAt(0).toUpperCase() + this.text.slice(1);
    }
  }
}
</script>

<style>

</style>