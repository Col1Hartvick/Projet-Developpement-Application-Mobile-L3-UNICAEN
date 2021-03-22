import axios from 'axios';

export function login({commit}, params) {
    axios.post('http://138.68.74.39/api/login?email='+params[0]+'&password='+params[1])
        .then(function (response) {
            commit("login", response.data);
        })
        .catch(function (error) {
            console.log(error);
            commit("errorLogin");
        })
}

export function signIn({commit}, params) {
    axios.post('http://138.68.74.39/api/register?name='+params[0]+'&email='+params[1]+'&password='+params[2])
        .then(function (response) {
            commit("signIn", response.data);
        })
        .catch(function (error) {
            var mess = "Error";
            if(error.response.status == 422){
                mess = "Incorrect name / email / password"
            }
            else if(error.response.status == 409){
                mess = "Email used"
            }
            commit("errorSignIn", mess);
        })
}

export function changePage({commit}){
    commit("changePage");
}

export function logout({commit}){
    commit("logout");
}