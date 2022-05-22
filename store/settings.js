import Vue from "vue"

export const state = () => ({
  notification:  null
})

export const mutations = {

}
export const actions = {
  async settings({commit, rootState}, payload) {
    console.log(rootState)
    let res = await this.$axios.$patch('/users/2/settings',  {...payload})
    console.log(res)
    return res
  },
}
export const getters = {}
