import {createStore} from 'vuex'

import immo from './immo';

export default createStore({
    debug : true,
    modules: {
        immo
      },
  })