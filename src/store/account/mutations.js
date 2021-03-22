export function login(state, data) {
    state.id = data;
}

export function signIn(state, data) {
    state.id = data;
}

export function errorLogin(state){
    state.errorLogin = "Incorect email / password";
}

export function errorSignIn(state , mess){
    state.errorSignIn = mess;
}

export function logout(state){
   state.id = "";
}