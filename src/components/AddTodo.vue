<template>
    <div class="add_todo__component">
        <input type="text" v-model="todo">
        <button class="add_todo__btn" @click="addTodo">add todo</button>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    data() {
        return {
            todo: ""
        }
    },
    methods: {
        ...mapActions([
            'createTodo'
        ]),
        addTodo() {
            this.createTodo(this.todo)
            this.todo = ""
        }
    }
}
</script>

<style lang="scss" scoped>
    .add_todo__component {
        input {
            width: 75.5%;
            padding: 9px 0 9px 5px;
            margin-top: 5px;
            border: 1px solid blue;
            border-bottom-left-radius: 3px;
            border-top-left-radius: 3px;
        }
        .add_todo__btn {
            padding: 10px;
            background: blue;
            color: white;
            outline: none;
            border: none;
            border-bottom-right-radius: 3px;
            border-top-right-radius: 3px;
            cursor: pointer;
        }
    }
</style>