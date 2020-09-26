<template>
    <div 
        class="dashboard__view"
    >
        <div class="dashboard__content">
            <AddTodo />
            <div class="boards__wrapper">
                <Board 
                    v-for="board in boards.boards" :key="board.id"
                    :id="board.id"
                    :title="board.title" 
                    :bg="board.bg"
                >
                    <Card 
                        v-for="(card, id) in board.cards" :key="id"
                        :id="[card.id, id]"
                        draggable="true"
                    >
                        {{card.title}}
                    </Card>
                </Board>
            </div>
        </div>
    </div>
</template>

<script>
import Card from '../components/Card.vue'
import Board from '../components/Board.vue'
import AddTodo from '../components/AddTodo.vue'
import {mapState, mapActions} from 'vuex'

export default {
    components: {
        Card,
        Board,
        AddTodo,
    },
    computed: {
        ...mapState([
            'boards'
        ])
    },
    created() {
        this.getTodos()
    },
    methods: {
        ...mapActions([
            'getTodos'
        ]),
    }
}
</script>

<style lang="scss" scoped>
    .dashboard__content {
        padding-top: 30px;
    }
    .boards__wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>