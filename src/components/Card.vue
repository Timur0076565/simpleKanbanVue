<template>
    <div 
        class="card__component"
        :id="id"
        :draggable="draggable"
        @dragstart="dragStart"
        @dragover.stop
    >
        <slot />
    </div>
</template>

<script>

export default {
    props: {
        id: {
            type: Array,
            default: Function
        },
        draggable: {
            type: String,
            default: ""
        },
    },
    methods: {
        dragStart(event) {
            const target = event.target;

            event.dataTransfer.setData('card_id', target.id);

            setTimeout(() => {
                target.style.display = "none";
            }, 0)
        },
    },
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