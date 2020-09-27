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
                cards: [

                ],
                bg: {
                    processBg: true,
                }
            },
            boardComplete: {
                title: 'Complete',
                id: "board-3",
                cards: [
                ],
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
        filteredBySelects(state) {
            let arr = state.boards.boardTodo.cards.slice()
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
        mutateCreateTodo(state, todo) {
            let title = todo.title
            let body = todo.body
            state.newCard = {
                title,
                body,
                id: Date.now()
            }

            if (title !== "") {
                state.boards.boardTodo.cards.unshift(state.newCard )
            }
        },
        dropMutate(state, e) {
            const card_id = e.dataTransfer.getData('card_id');

            const card = document.getElementById(card_id)

            card.style.display = "block";

            e.target.appendChild(card) 
        },
        // deleteCardMutate(state, id) {
        //     state.boards.boardTodo.cards.splice(id, 1)
        // },
        setTodos(state, response) { 
            state.boards.boardTodo.cards = response
        },
    },
    actions: {
        createTodo(context, todo) {
            context.commit('mutateCreateTodo', todo)
        },
        dropAction(context, e) {
            context.commit('dropMutate', e)
        },
        // deleteCardAction(context, id) {
        //     context.commit('deleteCardMutate', id)
        // },
        async getTodos ({ commit }) {
            const response = await axios
                .get('https://jsonplaceholder.typicode.com/posts')
                .catch((error) => {
                    console.log(error)
                })
            commit('setTodos', response.data)
        }
    }
}