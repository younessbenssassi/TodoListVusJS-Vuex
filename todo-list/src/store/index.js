import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos:[],
    num:0,
  },
  getters:{
    allTodos:(state)=>state.todos,
    num:(state)=>state.num,
  },
  actions: {
    addTodo({commit},todo){
      commit('add_todo',todo);
    },
    deleteTodo({commit},id){
      commit('delete_todo',id);
    },
  },
  mutations: {
    add_todo(state,todo){
      state.todos.push(todo);
      state.num += 1;
    },
    delete_todo(state,id){
      state.todos = state.todos.filter((todo)=>todo.id !=id);
      state.num -= 1;
    },
  },
  modules: {
  }
})
