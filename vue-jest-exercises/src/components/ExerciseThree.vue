<template>
  <section>
    <button @click="increase" id="increase">Öka</button>
    <button @click="decrease" id="decrease">Minska</button>
    <p id="result">{{ number }}</p>
  </section>
</template>

<script>
export default {
  name: 'ExerciseThree',
  data() {
    return {
      number: 0
    }
  }, 
  methods: {
    increase() {
      this.number++;
    },
    decrease() {
      this.number--;
    }
  }
}
</script>

<style>

</style>