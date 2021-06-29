import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)

export const FETCH_LIST = 'FETCH_LIST'
export const SET_ITEMS = 'SET_ITEMS'
export const SET_LOADING = 'SET_LOADING'

const store = new Store({
    state: {
        loading: false,
        items: [],
        total: 0,
        search: ''
    },
    actions: {
        async [FETCH_LIST](context, payload = {}) {
            const response = await fetch(`https://api.github.com/search/repositories?q=${payload.search}&sort=stars&order=desc&page=${payload.page}&per_page=20`)
            context.commit(SET_ITEMS, await response.json())
        }
    },
    mutations: {
        [SET_LOADING](state, payload) {
          state.loading = payload
        },
        [SET_ITEMS](state, payload) {
            state.items = payload.items
            state.total = payload.total_count
        }
    },
    getters: {
        loading: state => state.loading,
        items: state => state.items,
        total: state => state.total,
        search: state => state.search,
        
    }
})

export default store


// Add getters to have cleaner code because we never access directly state in store
// remove the params for the page and the value because it's handle at component level, store should be "stupid" so no logic here