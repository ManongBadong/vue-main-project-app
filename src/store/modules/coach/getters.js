export default {
  getCoaches(state) {
    return state.coaches;
  },
  getCoach(state) {
    // const coachIndex = state.coaches.findIndex((c) => c.id === payload);
    // return state.coaches[coachIndex];
    return state.selectedCoach;
  },
};
