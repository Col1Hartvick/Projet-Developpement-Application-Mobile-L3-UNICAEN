<template>
    <h1>Todoliste</h1>
    <ul>
        <li v-for="todo in filteredTodos" v-bind:key="todo.id">
            <input type="checkbox" v-model="todo.completed">
            <input type="text" v-model="todo.name">
            <button v-on:click="deleteTask(todo.id)">Supprimer</button>
        </li>
    </ul>
    <div>
        <button v-on:click="changeFilter('all')">Toutes</button>
        <button v-on:click="changeFilter('todo')">À faire</button>
        <button v-on:click="changeFilter('done')">Faites</button>
    </div>
    <div>
        <input v-model="this.newTodo" type="text"/>
        <button v-on:click="addTodo(this.newTodo)">Ajouter</button>
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
    mounted()
    {
        this.load();
    },
    methods:{
        ...mapActions("todo", ['load','changeStatus','deleteTask','changeFilter','addTodo']),
    },
    computed:{
        ...mapGetters("todo", ['getTodos','filteredTodos']),
    }
}
</script>

<style>
</style>