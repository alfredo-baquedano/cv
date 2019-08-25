import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    person: {
      contactInfo: {
        first_name: 'Alfredo',
        last_name: 'Baquedano',
        email: 'alfredo.baquedano.c@gmal.com',
        phone_number: '+569 8443 3012',
        linkedin: undefined,
        github: undefined,
        facebook: undefined,
      },
      experiences: [],
      skills: [],
      projects: [],
    },
  },
});
