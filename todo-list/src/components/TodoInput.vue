<template>
  <div id="app">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <form v-on:submit.prevent="addTodoItem()">
          <input class="form-control" @change="todoTitleChange" type="text" name="" v-bind:value="todoTitle">
        </form>
      </div>

    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import {v1} from "uuid";
export default {
  data(){
  return{
    todoTitle: "",
  };
  },
  methods:{
    ...mapActions(['addTodo']),
    todoTitleChange(e){
      this.todoTitle = e.target.value;
    },
    addTodoItem(){
      this.addTodo({
        id:v1(),
        title:this.todoTitle
      });
      this.todoTitle="";
    }
  }


}
</script>
