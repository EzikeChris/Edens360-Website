import Vue from "vue"
export const state = () => ({
  balance: 0,
  transactions: [],
})

export const mutations = {
  setStates(state, data) {
    Object.keys(data).map((key) => {
      Vue.set(state, key, data[key] )
    })
  }
}
export const actions = {
  async withdraw({commit}, payload) {
    let res = await this.$axios.$post('/wallet/withdraw', {...payload})
    if(res.code === 200){
      commit("setStates", {balance: res.wallet.balance})
    }
    return res
  },
  async changePin() {

  },
  async getWallet({commit}) {
    let res = await this.$axios.$get('/wallet')
    commit("setStates", {balance: res.wallet.balance})
  },
  async getTransactions({commit}) {
    let res = await this.$axios.$get('/transactions')
    commit("setStates", {transactions: res.transactions})
  },
  async fundWallet({dispatch, commit}, payload) {
    let res = await this.$axios.$post('/wallet/deposit', {
      ...payload,
      category: "Crypto",
      "description": "funds..."
    })

    commit("setStates", {balance: res.wallet.balance})
    dispatch('getTransactions')
  }
}

export const getters = {
  walletBalance: state => state.balance,
  walletTrxn: state => state.transactions
}
