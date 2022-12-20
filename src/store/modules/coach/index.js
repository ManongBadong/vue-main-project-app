import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      coaches: [
        {
          id: 0,
          name: 'Ray Gregory Reyes',
          rate: 19.0,
          types: ['Frontend', 'Backend'],
        },
        {
          id: 1,
          name: 'Mary-Ann Dasalla',
          rate: 15.0,
          types: ['Career'],
        },
        {
          id: 2,
          name: 'Ray Justin Reyes',
          rate: 8.0,
          types: ['Backend', 'Career'],
        },
      ],
      selectedCoach: {},
    };
  },
  mutations,
  actions,
  getters,
};
