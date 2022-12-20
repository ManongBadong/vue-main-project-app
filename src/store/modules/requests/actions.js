import axios from 'axios';

export default {
  async loadRequests(context, payload) {
    console.log(context, payload);
    return await new Promise((resolve, reject) => {
      axios
        .get(
          'https://vue-main-project-1169d-default-rtdb.asia-southeast1.firebasedatabase.app/requests.json'
        )
        .then((response) => {
          console.log(response);
          if (response) {
            const rawRequests = response.data;
            const requests = [];

            for (const coachData in rawRequests) {
              for (const request in rawRequests[coachData]) {
                const newRequest = {
                  id: coachData,
                  email: rawRequests[coachData][request].email,
                  message: rawRequests[coachData][request].message,
                };
                requests.push(newRequest);
              }
            }
            context.commit('loadRequests', requests);
          }

          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  loadCoachRequests(context, payload) {
    context.commit('loadCoachRequests', payload);
  },
  async addRequest(context, payload) {
    return await new Promise((resolve, reject) => {
      const message = {
        email: payload.request.email,
        message: payload.request.message,
      };

      axios
        .post(
          `https://vue-main-project-1169d-default-rtdb.asia-southeast1.firebasedatabase.app/requests/${payload.request.coachId}.json`,
          message
        )
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
