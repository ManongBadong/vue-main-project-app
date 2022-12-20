import { createStore } from 'vuex';
import coach from './modules/coach/index.js';
import request from './modules/requests/index.js';

const store = createStore({
  modules: {
    coach: coach,
    request: request,
  },
});

export default store;
