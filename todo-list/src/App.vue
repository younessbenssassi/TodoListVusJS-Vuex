<template>
  <div id="app">
    <div class="row justify-content-center"><h2>My Todo List ({{num}})</h2></div>
    <TodoInput/>
    <TodoList/>
  </div>
</template>

<script>
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import {mapGetters} from "vuex"
export default {
  name: 'App',
  components: {
    TodoInput,
    TodoList
  },
  computed:{
    ...mapGetters(['num'])
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
