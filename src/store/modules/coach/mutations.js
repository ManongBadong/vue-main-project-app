export default {
  fetchCoaches(state, payload) {
    state.coaches = payload;
  },
  addCoaches(state, payload) {
    state.coaches.push(payload.coach);
  },
  refreshSpecificCoach(state, payload) {
    const coachIndex = state.coaches.findIndex((c) => (c.id = payload.id));
    state.coaches[coachIndex] = payload;
    state.selectedCoach = state.coaches[coachIndex];
  },
};
