import { createStore } from 'vuex'

import todo from './todo';
import account from './account';

export default createStore({
    debug: true,
    modules: {
        todo,
        account
    },
})