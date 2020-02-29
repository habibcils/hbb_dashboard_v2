export default {
    namespaced: true,
    state: {
        menuList : ['jac', 'smith'],
        name: 'kok bisa'
    },
    getters: {
        getList : state => {
            return state.menuList 
        },
        getName : state => {
            return state.name 
        },        
        // username : state => state.menuList
    },
    actions: {
        async addMenu({commit}, menu){
            commit('ADD_MENU', menu)
        }
    },
    mutations: {
        ADD_MENU(state, menu){
            state.menuList = menu
        }
    }
}