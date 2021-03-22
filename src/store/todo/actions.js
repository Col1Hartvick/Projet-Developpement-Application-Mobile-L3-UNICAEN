import axios from 'axios';

export function getUser({ commit }, id) {
    axios.defaults.headers.common = {'Authorization': `Bearer ${id}`}
    axios.get('http://138.68.74.39/api/user')
        .then(response => {
            commit("setUserName",response.data['name'] );
        })
}

export function load({ commit }, id) {
    axios.defaults.headers.common = {'Authorization': `Bearer ${id}`}
    axios.get('http://138.68.74.39/api/todolists')
        .then(response => {
            commit("load", response.data);
        })
}

export function addTodoList({commit}, listName){
    axios.post('http://138.68.74.39/api/todolist?name='+listName)
        .then(response => {
            commit("addTodoList", response);
        })
}

export function deleteTodoList({commit}, listId){
    axios.delete('http://138.68.74.39/api/todolist/'+listId)
        .then(function() {
            commit("deleleTodoList", listId);
        })
}

export function addTodo({ commit }, params) {
    axios.post('http://138.68.74.39/api/todo?name='+params[0]+'&completed=0&todolist_id='+params[1])
        .then(response => {
            commit("addTodo", response["data"]);
        })    
}

export function deleteTask({ commit }, id) {
    axios.delete('http://138.68.74.39/api/todo/'+id)
        .then(function() {
            commit("deleteTask", id);
        })
}

export function modifyTodo2({ commit }, params) {
    axios.patch('http://138.68.74.39/api/todo/'+params[0]+'?name='+params[1])
        .then(function() {
            axios.post('http://138.68.74.39/api/completeTodo/'+params[0]+'?name='+params[1]+'&completed='+params[2]+'&todolist_id='+params[3])
                .then(function() {
                    commit("modifyTodo2");
                })
        });
}

export function changeFilter({ commit }, filter) {
    commit("changeFilter", filter);
}

export function changeCurrentTodolist({ commit }, id) {
    commit("changeCurrentTodolist", id);    
}

export function addUser({commit}, userName){
    commit("addUser",userName);
}