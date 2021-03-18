export function load(state, data) {
    for(let i=0; i < data.length; i++){
        if(data[i]["id"] == state.id){
            state.todos = data[i]["todos"];
            state.name = data[i]["name"];
        }
    }
}
export function changeStatus(state, data) {

    for (let i = 0; i < state.todos.length; i++) {
        const element = state.todos[i];
        if (element.id == data) {

            let newStateTodo = true;
            state.todos[i].completed = newStateTodo;
        }
    }
}

export function deleteTask(state, data) {
    for (let i = 0; i < state.todos.length; i++) {
        const element = state.todos[i];
        if (element.id == data) {
            state.todos = state.todos.slice(0,i).concat(state.todos.slice(i+1,state.todos.length));
        }
    }
}
export function changeFilter(state, data){
    state.filter = data;
}
export function addTodo(state, data){
    state.todos.push({id: state.todos[state.todos.length-1].id + 1, name : data, completed : false});
    var fs = require('fs');
    fs.writeFile('myjsonfile.json', JSON.stringify(state.todos), 'utf8');
}