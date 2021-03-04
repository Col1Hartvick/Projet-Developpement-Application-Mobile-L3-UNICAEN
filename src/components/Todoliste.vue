<template>
    <h1>Todoliste</h1>
    <ul>
        <li v-for="item in filteredTodos" :key="item.id">
            <input type="checkbox" v-model="item.completed"> {{ item.name }} <button v-on:click="deleteTask(item.id)">Supprimer</button>
        </li>
    </ul>
    <button v-on:click="changerFilter('all')">Toutes</button>
    <button v-on:click="changerFilter('todo')">À faire</button>
    <button v-on:click="changerFilter('done')">Faites</button>
    <input v-model="this.newTodo" type="text"/>
    <button v-on:click="addTodo(this.newTodo)">Ajouter</button>
</template>

<script>
export default {
    name: 'Todoliste',
    data() {
        return{
        todos: [
            {
                id: 1,
                name : 'tache 1',
                completed : false
            },
            {
                id: 2,
                name : 'tache 2',
                completed: true
            }
            ,
            {
                id: 3,
                name : 'tache 3',
                completed: true
            }
        ]
        ,
        newTodo: '',
        filter: 'all',
        }
    },
    methods:{
        deleteTask(index){
            for(let i = 0; i<this.todos.length; i++){
                if(this.todos[i].id == index){
                    this.todos = this.todos.slice(0,i).concat(this.todos.slice(i+1,this.todos.length));
                }
            }
        },
        changerFilter(filter){
            this.filter = filter;
        },
        addTodo(newTodo){
            this.todos.push({id: this.todos.length + 1, name : newTodo, completed : false});
        }
    },
    computed:{
        filteredTodos : function(){
            if(this.filter === 'todo'){
                return this.todos.filter(todo => !todo.completed);
            }
            else if(this.filter === 'done'){
                return this.todos.filter(todo => todo.completed);
            }
            return this.todos;
        }
    }
}
</script>

<style>
</style>