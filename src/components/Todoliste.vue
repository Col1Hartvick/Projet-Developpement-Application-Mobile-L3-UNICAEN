<template>
    <h1>Todoliste</h1>
    <ul>
        <li v-for="todo in getTodos" v-bind:key="todo.id">
            <p>{{todo.name}} 
                <input v-if="todo.completed == true" type="checkbox" id="todo-status" checked >
                <input v-else type="checkbox" id="todo-status"> 
                <button> Modifier </button>
                <button v-if="todo.completed == false" v-on:click="changeStatus(todo.id)"> Finie </button>
            </p>      
        </li>
    </ul>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'Todoliste',
    mounted()
    {
        this.load();
    },
    methods:{
        ...mapActions("todo", ['load','changeStatus']),
    },
    computed:{
        ...mapGetters("todo", ['getTodos']),
    }
}
</script>

<style>
</style>