export function load(state, data) {
    //console.log(data);
    state.properties = data
}
export function changeStatus(state, data) {

    for (let i = 0; i < state.properties.length; i++) {
        const element = state.properties[i];
        if (element.id == data) {

            let newStateTodo = true;
            state.properties[i].completed = newStateTodo;
        }
    }
}

/*export function deleteTodo(state, data) {

}*/