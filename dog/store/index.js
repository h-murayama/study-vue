import Vuex from 'vuex'

const appStore = () => {
    return new Vuex.Store({
        state: {
            breed_list:{},
        },
        mutations: {
            breed_list_update(state, payload){
                state.breed_list = {...payload}
            },
        }
    })
}

export default appStore;
