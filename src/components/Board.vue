<template>
    <div 
        class="board__component"
        :id="id"
        @dragover.prevent
        @drop.prevent="drop"
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
    props: ['id', "title", "bg"],
    data() {
        return {
            color: "red"
        }
    },
    methods: {
        ...mapActions([
            'dropAction'
        ]),
        drop(e) {
            this.dropAction(e)
        }
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