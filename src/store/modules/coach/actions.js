import axios from 'axios';

export default {
  async fetchCoaches(context, payload) {
    await axios
      .get(
        'https://vue-main-project-1169d-default-rtdb.asia-southeast1.firebasedatabase.app/coaches.json'
      )
      .then((response) => {
        if (response) {
          const coaches = response.data;

          let fetchedCoaches = [];

          console.log(payload);

          for (const coach in coaches) {
            let filtered = false;

            if (payload.activeFilters.frontend) {
              if (coaches[coach].types.includes('frontend')) filtered = true;
            }

            if (payload.activeFilters.backend) {
              if (coaches[coach].types.includes('backend')) {
                filtered = true;
                console.log('test');
              }
            }

            if (payload.activeFilters.career) {
              if (coaches[coach].types.includes('career')) filtered = true;
            }

            if (
              !payload.activeFilters.frontend &&
              !payload.activeFilters.backend &&
              !payload.activeFilters.career
            ) {
              filtered = true;
              console.log('testsetesteste');
            }

            if (filtered) {
              const fetchCoach = {
                id: coach,
                name: coaches[coach].name,
                rate: coaches[coach].rate,
                types: coaches[coach].types,
              };

              fetchedCoaches.push(fetchCoach);
            }
          }

          context.commit('fetchCoaches', fetchedCoaches);
        }
      });
  },
  async addCoaches(context, payload) {
    const coach = payload.coach;

    await axios.put(
      `https://vue-main-project-1169d-default-rtdb.asia-southeast1.firebasedatabase.app/coaches/${payload.coach.id}.json`,
      coach
    );

    context.dispatch('fetchCoaches');
  },
  async refreshSpecificCoach(context, payload) {
    await axios
      .get(
        `https://vue-main-project-1169d-default-rtdb.asia-southeast1.firebasedatabase.app/coaches/${payload.id}.json`
      )
      .then((response) => {
        if (response) {
          const coach = response.data;
          context.commit('refreshSpecificCoach', coach);
        }
      });
  },
};
