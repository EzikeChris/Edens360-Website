import Vue from "vue"
export const state = () => ({
  approved:[],
  pending:[]
})

export const mutations = {
  setStates(state, data) {
    Object.keys(data).map((key) => {
      Vue.set(state, key, data[key] )
    })
  }
}
export const actions = {
  /**
   * Need to refactor these 3 into one
   * @param commit
   * @returns {Promise<void>}
   */
  async getApprovedEmployees({commit}) {
    let res = await this.$axios.$get('organizations/employees?filter_by=status&filter=VERIFIED')
    commit("setStates", {approved: res.employees})
  },

  async getPendingEmployees({commit}) {
    let res = await this.$axios.$get('organizations/employees?filter_by=status&filter=UNVERIFIED')
    commit("setStates", {pending: res.employees})
  },

  async employees({commit}) {
    let res = await this.$axios('organizations/employees?page=1&perPage=10');
    console.log(res)
  },

  async verify({commit}, payload){
    return await this.$axios.$post('/organizations/verify',  {...payload})
  },
  async sendInvite({commit}, payload) {
    return await this.$axios.$post('/organizations/invite', {
      invitee: payload.email
    });
  },
}
export const getters = {
  approvedEmployees: state => state.approved,
  pendingEmployees: state => state.pending
}
