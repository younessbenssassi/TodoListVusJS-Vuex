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
    doneTodo({commit},bol){
      commit('done_todo',bol);
    },
  },
  mutations: {
    add_todo(state,todo){
      state.todos.push(todo);
      state.num += 1;
    },
    delete_todo(state,id){
      state.todos = state.todos.filter((todo)=>todo.id !=id);
      if(state.num>0){
        state.num -= 1;
      }
    },
    done_todo(state,bol){
      if (bol) {
        if(state.num>0){
          state.num -= 1;
        }
      }else {
        state.num += 1;
      }
    },
  },
  modules: {
  }
})
