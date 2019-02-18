import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { AxiosResponse} from 'axios';

import API from '@/api';
import { RootState } from '@/types/root';
import { project } from '@/store/project';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
      projectDetail: {},
      events: [],
      checkResult: [],
      checkBrief: {},
  },
  mutations: {
    setProjectInfo(state, payload) {
        state.projectDetail = payload;
    },
    setEvents(state, payload) {
        state.events = payload;
    },
    setCheckResult(state, payload) {
        state.checkResult = payload;
    },
    setCheckBrief(state, payload) {
        state.checkBrief = payload;
    },
  },
  actions: {
        fetchProjectInfo: async (context, payload) => {
            const resp = await API.get(`/project/${payload.service}/${payload.owner}/${payload.project}`);
            return context.commit('setProjectInfo', resp.data);
        },
        fetchEvents: async (context, payload) => {
            const resp = await API.get('/events');
            return context.commit('setEvents', resp.data);
        },
        fetchCheckResult: async (context, payload) => {
            const resp = await API.get(`/project/${payload.service}/${payload.owner}/${payload.project}/${payload.commit}/result`);
            return context.commit('setCheckResult', resp.data);
        },
        fetchCheckBrief: async (context, payload) => {
            const resp = await API.get(`/project/${payload.service}/${payload.owner}/${payload.project}/${payload.commit}/brief`);
            return context.commit('setCheckBrief', resp.data);
        },
  },
  getters: {
      repositoryName: (state) => {
            if (!state.projectDetail) {
                return {};
            }
            return (state.projectDetail as any).projectName;
        },
    },
});


// const store: StoreOptions<RootState> = {
//     state: {
//         version: '1.0.0',
//     },
//     modules: {
//         project,
//     },
// };

// export default new Vuex.Store<RootState>(store);
