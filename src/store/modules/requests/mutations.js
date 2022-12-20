export default {
  loadRequests(state, payload) {
    state.requests = payload;
  },
  //   loadCoachRequests(state,payload) {

  //   }
  addRequest(state, payload) {
    state.requests.push(payload);
  },
};
