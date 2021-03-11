import { createStore } from 'vuex'

import todo from './todo';

export default createStore({
    debug: true,
    modules: {
        todo
    },
})