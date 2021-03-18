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

export function getName(state){
    if(state.data != null){
        for (let i = 0; i < state.data.length; i++){
            if(state.data[i]["id"] == state.currentTodo){
                return state.data[i]["name"];
            }
        }
    }
}

export function getTodolists(state){
    return state.data;
}