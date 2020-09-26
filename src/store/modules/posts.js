import axios from "axios"

export default {
    state: {
        posts: [
            {
                "userId": 1,
                "id": 1,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            },
        ]
    },
    mutations: {
        
        setPosts(state, response) {
            state.posts = response
        }
    },
    actions: {
        
        async getPosts ({ commit }) {
            const response = await axios
                .get('https://jsonplaceholder.typicode.com/posts')
                .catch((error) => {
                    console.log(error)
                })
            commit('setPosts', response.data)
        }
    }
}