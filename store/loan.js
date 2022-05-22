import Vue from "vue"

export const state = () => ({
    active:[],
    pending:[]
})

export const mutations = {
  // setToken(state, token) {
  //   Vue.set(state, 'token', token)
  // },
  setStates(state, data) {
    Object.keys(data).map((key) => {
      Vue.set(state, key, data[key] )
    })
  }
}
export const actions = {
  // async loanRequest({commit}, payload) {
  //   let res = await this.$axios.$post('/loans',  {...payload})
  //   return res
  // },
  async getActiveLoans({commit}) {
    let res = await this.$axios.$get('organizations/loans?status=active')
    commit("setStates", {active: res.loans})
},

async getPendingLoans({commit}) {
    let res = await this.$axios.$get('organizations/loans?status=pending')
    commit("setStates", {pending: res.loans})
},
  // async getSingleLoan({commit}, payload) {
  //   let res = await this.$axios.$get('/loans')
  //   console.log(res)
  // },
  // async getCurrentLoan({commit}, payload) {
  //   let res = await this.$axios.$get('/loan')
  //   commit("setStates", { current: res })
  //   return res
  // }
}
export const getters = {
  activeLoans: state => state.active,
  pendingLoans: state => state.pending
}
