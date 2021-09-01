<template>
  <section>
    <input type="text" id="todo-text" v-model="newTodo" />
    <button @click="addTodo">Lägg till todo</button>
    <article>
      <ul>
        <li v-for="(todo, index) in todos" :key="index" 
          @click="removeTodo(index)">{{ todo.text }}</li>
      </ul>
    </article>
  </section>
</template>

<script>
export default {
  name: 'ExerciseFive',
  data() {
    return {
      newTodo: '',
      todos: []
    }
  },
  methods: {
    addTodo() {
      this.todos.push({ text: this.newTodo });
    },
    removeTodo(index) {
      this.todos = this.todos.filter((todo, i) => {
        return index !== i;
      });
    }
  }
}
</script>

<style scoped>
ul { 
  list-style-type: none;
}
</style>
