import axios from 'axios';

export function load({ commit }){
    axios.get('json/immo.json')
            .then(response => {
                commit("load", response.data);
                console.log("a" + response.data);
            })
}
