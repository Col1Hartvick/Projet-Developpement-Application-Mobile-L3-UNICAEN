<template>
    <button v-on:click="load">CHARGER</button>
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
    methods:{
        ...mapActions("immo", ['load']),
        loadData() {
            this.load();
        }
    },
    computed:{
        ...mapGetters("immo", ['getTodos']),
    }
}
</script>

<style>
</style>