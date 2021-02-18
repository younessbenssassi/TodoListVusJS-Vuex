<template>
  <div id="app">
    <div class="row justify-content-center">
      <div class="col-md-2 border border-dark">
        <button class="btn btn-success" @click="donefun()" v-if='!done'>Done</button>
        <button class="btn btn-warning" @click="donefun()" v-if='done'>undone</button>
      </div>
      <div class="col-md-4 border border-dark">
        <p v-if='!done' ><b>{{todo.title}}</b></p>
        <p style='text-decoration: line-through;' v-if='done'><b>{{todo.title}}</b></p>
      </div>
      <div class="col-md-2 border border-dark">
        <button class="btn btn-danger" @click="deleteTodo(todo.id)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";
export default {
props:{
  todo:{}
},
data(){
return{
  done:false,
}

},
methods:{
  ...mapActions(["deleteTodo","doneTodo"]),
  donefun(){
    this.done = this.done == true ? false : true;
    this.doneTodo(this.done);
  },
  },

}
</script>
