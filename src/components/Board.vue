<template>
    <div 
        class="board__component"
        :id="id"
        @dragover.prevent
        @drop.prevent="DROP"
        :class="{
            isTodo: bg.todoBg,
            isProcess: bg.processBg,
            isComplete: bg.completeBg,
        }"
    >
        <h3 class="title">{{title}}</h3>
        <div class="todos__wrapper">
            <slot />
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    props: {
        id: {
            type: String,
            default: ""
        },
        title: {
            type: String,
            default: ""
        },
        bg: {
            type: Object,
            default: Function
        }
    },
    data() {
        return {
            color: "red"
        }
    },
    methods: {
        ...mapActions([
            'DROP'
        ]),
    }
}
</script>

<style lang="scss" scoped>

.board__component{
    width: 30.9%;
    height: 87vh;
    margin: 30px 10px 0;
    border-radius: 3px;

    .todos__wrapper {
        overflow: auto;
        height: 78.5vh;
    }

    .title {
        color: white;
    }
}
.isTodo {
    background-color: blue;
}
.isProcess {
    background-color: green;
}
.isComplete {
    background-color: red;
}

</style>