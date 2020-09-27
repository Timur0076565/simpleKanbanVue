<template>
    <div class="add_todo__component">
        <input type="text" v-model="todo.title" placeholder="Add title">
        <input type="text" v-model="todo.body" placeholder="Add text">
        <button class="add_todo__btn" @click="addTodo">add todo</button>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    data() {
        return {
            todo: {
                title: "",
                body: ""
            }
        }
    },
    methods: {
        ...mapActions([
            'createTodo'
        ]),
        addTodo() {
            this.createTodo(this.todo)
            this.todo.title = ""
            this.todo.body = ""
        }
    }
}
</script>

<style lang="scss" scoped>
    .add_todo__component {
        display: flex;
        justify-content: center;
        padding: 0 15px;

        input {
            width: 45.5%;
            padding: 9px 0 9px 5px;
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