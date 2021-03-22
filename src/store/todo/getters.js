export function filteredTodos(state){
    var currentTodos = null;
    if(state.data != null){
        for (let i = 0; i < state.data.length; i++){
            if(state.data[i]["id"] == state.currentTodo){
                currentTodos = state.data[i]["todos"];
            }
        }
    }
    if(state.filter === 'todo'){
        return currentTodos.filter(todo => !todo.completed);
    }
    else if(state.filter === 'done'){
        return currentTodos.filter(todo => todo.completed);
    }
    return currentTodos;
}

export function getTodoName(state){
    if(state.data != null){
        for (let i = 0; i < state.data.length; i++){
            if(state.data[i]["id"] == state.currentTodo){
                return state.data[i].name;
            }
        }
    }
}

export function getCurrentTodo(state){
    return state.currentTodo;
}

export function getTodolists(state){
    return state.data;
}

export function getUserName(state){
    return state.userName;
}

export function countTodo(state){
    if(state.data != null){
    let cpt = 0;
    for (let i = 0;i < state.data.length; i++) {
        for (let j = 0; j < state.data[i]['todos'].length; j++) {
            if (state.data[i]["id"] == state.currentTodo) {
                if (state.data[i]['todos'][j]['completed'] == false) {
                    cpt ++;
                }
            }
        }
    }
    return cpt;
}
}

export function countTodoTotal(state){
    if(state.data != null){
    let cpt = 0;
    for (let i = 0; i < state.data.length; i++) {
        for (let j = 0; j < state.data[i]['todos'].length; j++) {
            if (state.data[i]['todos'][j]['completed'] == false) {
                cpt ++;
            }
        }
    }
    return cpt;
}
}