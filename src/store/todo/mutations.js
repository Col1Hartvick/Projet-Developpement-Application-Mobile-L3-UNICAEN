export function load(state, data) {
    state.data = data;
}
export function deleteTask(state, data) {
    var currentTodos = null;
    for (let i = 0; i < state.data.length; i++){
        if(state.data[i]["id"] == state.currentTodo){
            currentTodos = state.data[i]["todos"];
            for (let j = 0; j < currentTodos.length; j++) {
                if (currentTodos[j]["id"] == data) {
                    state.data[i]["todos"] = currentTodos.slice(0,j).concat(currentTodos.slice(j+1,currentTodos.length));
                }
            }
        }
    }
}
export function changeFilter(state, data){
    state.filter = data;
}
export function addTodo(state, data){
    for (let i = 0; i < state.data.length; i++){
        if(state.data[i]["id"] == state.currentTodo){
            state.data[i]["todos"].push({id: state.data[i]["todos"][state.data[i]["todos"].length-1].id + 1, name : data, completed : false});
        }
    }
}
export function changeCurrentTodolist(state, data){
    state.currentTodo = data;
}

export function addUser(state, data){
    state.userName = data
}