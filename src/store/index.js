import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 1
    },
    mutations: {
        increase() {
            this.state.count++
        }
    },
    actions: {},
    modules: {}
})
