export default {
    state: {
        userEmail: "kanban@kanban.com",
        userPassword: "kanban",  
        loginDataWrong: false,
    },
    mutations: {
        mutateCheckLogin(state,argument) {
            if (argument[0] === state.userEmail && argument[1] === state.userPassword) {
                argument[2].push({name: 'dashboard'})
            }
            state.loginDataWrong = true;
            console.log(state.userEmail)
        }
    },
    actions: {
        async checkLogin(context, argument) {
            await context.commit('mutateCheckLogin', argument)
        }
    }
}