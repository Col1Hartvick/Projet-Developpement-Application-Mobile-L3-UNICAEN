<template>
    <h2>Hello {{getUserName}}</h2>
    <ul>
        <li v-for="todolist in getTodolists" v-bind:key="todolist.id">
            <a href="javascript:;" v-on:click="changeCurrentTodolist(todolist.id)">{{todolist.name}}</a> <button v-on:click="deleteTodoList(todolist.id)">x</button>
        </li>
    </ul>
    <div>
        <input v-model="newTodosList" type="text"/>
        <button v-on:click="addTodoList(this.newTodosList),resetNewTodoList()">Add todoslist</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'Sidebar',
    data() {
        return{
            newTodosList: '',
        }
    },
    mounted()
    {
        if(this.getId == ""){
            this.$router.push('/');
            return;
        }
        this.getUser(this.getId['token'])
        this.load(this.getId['token']);
    },
    methods:{
        ...mapActions("todo", ['changeCurrentTodolist', 'deleteTodoList', 'addTodoList', 'getUser','load']),
        resetNewTodoList(){
            this.newTodosList = '';
        }
    },
    computed:{
        ...mapGetters("todo", ['getUserName', 'getTodolists']),
        ...mapGetters("account", ['getId']),
    }
}
</script>

<style>
</style>