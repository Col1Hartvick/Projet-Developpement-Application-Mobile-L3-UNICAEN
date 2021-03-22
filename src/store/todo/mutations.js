export function setUserName(state, data) {
    state.userName = data;
}

export function load(state, data) {
    state.data = data;
    state.currentTodo = state.data[0]["id"];
    for(let i =0; i  < state.data.length; i++){
        for(let j=0; j < state.data[i]['todos'].length; j++){
            if(state.data[i]['todos'][j]["completed"] == 1){
                state.data[i]['todos'][j]["completed"] = false;
            }
            else{
                state.data[i]['todos'][j]["completed"] = true;
            }
        }
    }
}

export function addTodoList(state, response) {
    state.data.push(response['data']);
}

export function deleleTodoList(state, listId){
    for (let i = 0; i < state.data.length; i++){
        if(state.data[i]["id"] == listId){
            state.data.splice(i, 1);
        }
    }
}

export function addTodo(state, data){
    for (let i = 0; i < state.data.length; i++){
        if(state.data[i]["id"] == state.currentTodo){
            state.data[i]['todos'].push(data);
        }
    }
}

export function deleteTask(state, data) {
    for (let i = 0; i < state.data.length; i++){
        if(state.data[i]["id"] == state.currentTodo){
            let currentTodos = state.data[i]['todos'];
            for (let j = 0; j < currentTodos.length; j++) {
                if (currentTodos[j]["id"] == data) {
                    state.data[i]['todos'].splice(j, 1);
                }
            }
        }
    }
}

export function modifyTodo2(state){
    state.filter = state.filter+"";
}

export function changeFilter(state, data){
    state.filter = data;
}

export function changeCurrentTodolist(state, data){
    state.currentTodo = data;
}

export function addUser(state, data){
    state.userName = data;
}