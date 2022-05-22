import Vue from "vue"
import Cookies from "js-cookie"
export const state = () => ({
  token:231121212,
  dashboard: null,
  user: {
    "first_name": "Dapo",
    "last_name": "Believe",
    "email": "ddemodata@gmail.com",
    "phone_number": "00000000000"
  },
  toast: {},
  agents: null
})

export const mutations = {
  setToken(state, token) {
    Vue.set(state, 'token', token)
  },
  setAuthUser(state, data) {
    Vue.set(state, 'user', data)
  },
  setStates(state, data) {
    Object.keys(data).map((key) => {
      Vue.set(state, key, data[key] )
    })
  }
}
export const actions = {
  async register({commit, state}, payload) {
    let res = await this.$axios.$post('/agents', {organization_id:1, ...payload})
    const {token} = res
  },
  async login({commit,state}, payload) {
    // Cookies.set('x-access-token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjo1OTU2NDYzODM0LCJpYXQiOjE2MzY0NjM4MzQsImp0aSI6IjZmODgzODYxZDY4NTRjNWVhZDMzN2U4Y2I5NmI1ODE4IiwidXNlcl9pZCI6Nn0.bcCAJr7qXN9tN6DVKHS45h7wUKSCPUVc9eHF1tfUkwY')
    let res = await this.$axios.$post('auth/login/', {...payload})
  },
  async verifyOtp({commit,state}, payload) {
    delete payload.password
    let res = await this.$axios.post('auth/login/validate_otp/', {...payload})
    if(res.status === 200) {
      const {access_token, refresh_token, user } = res.data;
      Cookies.set('x-access-token', access_token)
      Cookies.set('x-refresh-token', refresh_token)
      commit("setAuthUser", user)
    }
    return res;
  },
  async home({commit}) {
    let res = await this.$axios.$get('/dashboard/');
    commit('setStates', {dashboard:  res})
  },
  async update({commit, state},  payload) {
    commit('setAuthUser', payload)
    let res = await this.$axios.$patch(`/users/${payload.id}`, {...payload})
  },
  async admin({dispatch, commit}) {
    let res = await this.$axios.$get('/admin/');
    commit("setAuthUser", res)
  },
  async agents({commit}) {
    let res = await this.$axios.$get(`organizations/agents?page=1&perPage=10&order_by=created_at&order=desc`);
    commit('setStates', { agents: res.agents })
  },
  async logout({ commit }) {
    commit('setAuthUser', null)
    commit('setToken', null)
    Cookies.remove('x-access-token');
  },
  async organizations({ commit }) {
    return await this.$axios.$get('internals/organizations?page=1&perPage=100')
  },
  async inviteAgent({ commit }, payload) {
    payload.invitees = [payload.email];
    return await this.$axios.$post('organizations/invite', {...payload})
  },
}
export const getters = {
  getUser: state => state.user,
  getDashboard: state => state.dashboard,
  toast: state => state.toast,
  getAgents: state => state.agents
}
