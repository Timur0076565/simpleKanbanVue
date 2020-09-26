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
        newCard: {}
    },
    mutations: {
        mutateCreateTodo(state, todo) {
            let title = todo
            state.newCard = {
                title,
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
        deleteCardMutate(state, id) {
            state.boards.boardTodo.cards.splice(id, 1)
        },
        setTodos(state, response) {
            
            for (let i = 0; i < response.length; i++) {
                if (response[i].completed === true) {
                    state.boards.boardComplete.cards = response
                }
                state.boards.boardTodo.cards = response
            }
        }
    },
    actions: {
        createTodo(context, todo) {
            context.commit('mutateCreateTodo', todo)
        },
        dropAction(context, e) {
            context.commit('dropMutate', e)
        },
        deleteCardAction(context, id) {
            context.commit('deleteCardMutate', id)
        },
        async getTodos ({ commit }) {
            const response = await axios
                .get('https://jsonplaceholder.typicode.com/todos')
                .catch((error) => {
                    console.log(error)
                })
            commit('setTodos', response.data)
        }
    }
}