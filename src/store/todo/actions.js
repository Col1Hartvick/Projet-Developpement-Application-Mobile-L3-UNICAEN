import axios from 'axios';

export function load({ commit }) {
    axios.get('json/todo.json')
        .then(response => {
            commit("load", response.data);
        })
}
export function changeStatus({ commit }, id) {
    commit("changeStatus", id);
}
export function deleteTask({ commit }, id) {
    commit("deleteTask", id);
}
export function changeFilter({ commit }, filter) {
    commit("changeFilter", filter);
}
export function addTodo({ commit }, name) {
    commit("addTodo", name);    
}