export default {
    state: {
        userEmail: "kanban@kanban.com",
        userPassword: "kanban",  
        loginValidation: false,
    },
    getters: {
        LOGIN_VALIDATION(state) {
            return state.loginValidation
        }
    },
    mutations: {
        CHECK_LOGIN(state,argument) {
            if (argument[0] === state.userEmail && argument[1] === state.userPassword) {
                argument[2].push({name: 'dashboard'})
            }
            state.loginValidation = true;
        }
    },
    actions: {
        async CHECK_LOGIN(context, argument) {
            await context.commit('CHECK_LOGIN', argument)
        }
    }
}