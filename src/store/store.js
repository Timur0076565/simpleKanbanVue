import Vue from "vue";
import Vuex from "vuex";

import user from './modules/user.js'
import boards from './modules/boards.js'
import posts from './modules/posts.js'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        user: user,
        boards: boards,
        posts: posts,
    }
})