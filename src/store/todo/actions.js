import axios from 'axios';

export function load({ commit }) {
    axios.get('json/todo.json')
        .then(response => {
            commit("load", response.data);
            //console.log("a" + response.data);
        })
}
export function changeStatus({ commit }, id) {
    commit("changeStatus", id);
}

/*export function deleteTodo({ commit }, id) {
    commit("deleteTodo", id);
}*/