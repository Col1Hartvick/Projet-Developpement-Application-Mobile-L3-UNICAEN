<template>
    <br/>
    <h2>{{this.getTodoName}}</h2>
    <ul>
        <li v-for="todo in filteredTodos" v-bind:key="todo.id">
            <input @change="modifyTodo($event, todo.id)" type="checkbox" v-model="todo.completed">
            <input @input="modifyTodo($event, todo.id)" type="text" v-model="todo.name">
            <button v-on:click="deleteTask(todo.id)">x</button>
        </li>
    </ul>

    <p> {{countTodo}} remaining for this todo </p>
    <p> {{countTodoTotal}} remaining in all</p>
    <div>
        <button v-on:click="changeFilter('all')">All</button>
        <button v-on:click="changeFilter('todo')">To do</button>
        <button v-on:click="changeFilter('done')">Done</button>
    </div>
    <div>
        <input v-model="this.newTodo" type="text"/>
        <button v-on:click="addTodo([this.newTodo, this.getCurrentTodo])">Add todo</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'Todoliste',
    data() {
        return{
            newTodo: '',
        }
    },
    methods:{
        ...mapActions("todo", ['modifyTodo2','deleteTask','changeFilter','addTodo','changeCurrentTodolist']),
        modifyTodo($event, idTodo){
            let completed = "";
            let name = "";
            if($event.target.type == "checkbox"){
                completed = $event.target.checked;
                name = $event.target.nextSibling.value;
            }
            else{
                completed = $event.target.previousSibling.checked;
                name = $event.target.value;
            }
            if(completed){completed = 0;}
            else{completed = 1;}
            this.modifyTodo2([idTodo, name, completed, this.getCurrentTodo]);
        }
    },
    computed:{
        ...mapGetters("todo", ['getCurrentTodo','getUserName','getTodos','filteredTodos','getTodoName','countTodo','countTodoTotal']),
    }
}
</script>

<style>
li {list-style: none;}
</style>