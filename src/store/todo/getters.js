export function getTodos(state) {
    return state.todos;
}

export function filteredTodos(state){
    if(state.filter === 'todo'){
        return state.todos.filter(todo => !todo.completed);
    }
    else if(state.filter === 'done'){
        return state.todos.filter(todo => todo.completed);
    }
    return state.todos;
}