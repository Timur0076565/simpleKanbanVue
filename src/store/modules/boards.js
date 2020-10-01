import axios from "axios"

export default {
    state: {
        boards: {
            boardTodo: {
                title: 'To Do',
                id: "board-1",
                cards: [
                    {
                        title: "card one",
                        id: 45345345345
                    },
                ],
                bg: {
                    todoBg: true,
                }
            },
            boardInProcess: {
                title: 'In process',
                id: "board-2",
                bg: {
                    processBg: true,
                }
            },
            boardComplete: {
                title: 'Complete',
                id: "board-3",
                bg: {
                    completeBg: true,
                },
            }
        },
        newCard: {},
        selects: {
            sort: [
                {name: "Cancel", value: false},
                {name: "Apply", value: true}
            ],
            label: "Sort by alphavite",
            selected: false
        },
    },
    getters: {
        FILTERED_BY_SELECTS(state) {
            const arr = state.boards.boardTodo.cards.slice()
            if (state.selects.selected === true) {
                return arr.sort((a, b) => {
                    if (a.title > b.title) {
                        return 1;
                    } else {
                        return -1;
                    } 
                })
            } else {
                return state.boards.boardTodo.cards.map((item) => {
                    return {
                        title: item.title,
                        body: item.body
                    }
                })
            }
        }
    },
    mutations: {
        CREATE_TODO(state, todo) {
            const title = todo.title
            const body = todo.body
            state.newCard = {
                title,
                body,
                id: Date.now()
            }

            if (title !== "") {
                state.boards.boardTodo.cards.unshift(state.newCard )
            }
        },
        DROP(state, event) {
            const card_id = event.dataTransfer.getData('card_id');

            const card = document.getElementById(card_id)

            card.style.display = "block";

            event.target.appendChild(card) 
        },
        SET_TODOS(state, response) { 
            state.boards.boardTodo.cards = response
        },
    },
    actions: {
        CREATE_TODO(context, todo) {
            context.commit('CREATE_TODO', todo)
        },
        DROP(context, event) {
            context.commit('DROP', event)
        },
        async GET_TODOS ({ commit }) {
            const response = await axios
                .get('https://jsonplaceholder.typicode.com/posts')
                .catch((error) => {
                    console.log(error)
                })
            commit('SET_TODOS', response.data)
        },
    }
}