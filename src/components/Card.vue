<template>
    <div 
        class="card__component"
        :id="id"
        :draggable="draggable"
        @dragstart="dragStart"
        @dragover.stop
    >
        <slot />
        <!-- <button class="delete_card" @click="deleteCard(id[1])">X</button> -->

    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    props: ['id', 'draggable'],
    methods: {
        ...mapActions([
            'deleteCardAction'
        ]),
        dragStart(e) {
            const target = e.target;

            e.dataTransfer.setData('card_id', target.id);

            setTimeout(() => {
                target.style.display = "none";
            }, 0)
        },
        // deleteCard(id) {
        //     this.deleteCardAction(id)
        // }
    }
}
</script>

<style lang="scss" scoped>
    .card__component {
        position: relative;
        background: white;
        margin: 5px;
        padding: 15px 10px;
        cursor: pointer;
        border-radius: 3px;


        .delete_card{
            position: absolute;
            top: 10px;
            right: 10px;
            color: red;
            cursor: pointer;
            display: none;
        }

        &:hover .delete_card {
            display: flex;
        }
    }
</style>