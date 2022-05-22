const queryString = require('querystring')

import Vue from "vue"
export const state = () => ({
  agencies: null
})

export const mutations = {
  setStates(state, data) {
    Object.keys(data).map((key) => {
      Vue.set(state, key, data[key] )
    })
  }
}
export const actions = {
  async getOrgs({commit}, payload) {
    const q = {
      status:  null,
      page_size: 10,
    }
    const newQueryObj = queryString.stringify({ ...q, ...payload })
    let res = await this.$axios.$get(`organizations/?${newQueryObj}`)
    commit('setStates', {agencies: res.results})
  },
  async invite({commit}, payload)  {
    return await this.$axios.$post(`organizations/invite/`, {...payload})
  },
  async patchOrg({dispatch, commit}, payload)  {
    const {org} = payload
    delete payload.org
    let res = await this.$axios.$patch(`organizations/${org}/`, {...payload})
    dispatch('getOrgs');
    return res;
  },
  async warn({dispatch, commit}, payload)  {
    // const {org} = payload
    // delete payload.org
    let res = await this.$axios.$post(`organizations/warn/`, {...payload})
    return res;
  }
}
export const getters = {
  getAgencies: state => state.agencies
}
