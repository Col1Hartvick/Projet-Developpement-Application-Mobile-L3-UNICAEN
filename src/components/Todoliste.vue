<template>
    <h1>Todoliste</h1>
    <ul>
        <li v-for="todo in getTodos" v-bind:key="todo.id">
            {{todo.name}}
        </li>
    </ul>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'Todoliste',
    mounted()
    {
        this.load;
    },
    methods:{
        ...mapActions("todo", ['load']),
    },
    computed:{
        ...mapGetters("todo", ['getTodos']),
    }
}
</script>

<style>
</style>