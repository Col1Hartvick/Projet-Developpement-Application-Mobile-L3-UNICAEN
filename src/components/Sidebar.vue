<template>
    <ul>
        <li v-for="todolist in getTodolists" v-bind:key="todolist.id">
            <button v-on:click="changeCurrentTodolist(todolist.id)">{{todolist.name}}</button>
        </li>
    </ul>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'Sidebar',
    mounted()
    {
        this.load();
    },
    methods:{
        ...mapActions("todo", ['load','changeStatus','deleteTask','changeFilter','addTodo', 'changeCurrentTodolist']),
    },
    computed:{
        ...mapGetters("todo", ['getTodos','filteredTodos','getName', 'getTodolists']),
    }
}
</script>

<style>
</style>