<template>
    <div class="post__component">
        <div class="post__title">{{post.title}}</div>
        <div class="post__text">{{post.body}}</div>
    </div>
</template>

<script>
export default {
    props: ['post']
}
</script>

<style lang="scss" scoped>
    .post__component {
        background: blue;
        width: 95%;
        padding: 5px;
        margin-top: 10px;

        .post__title{
            font-size: 22px;
            color: white;
            padding: 10px 20px;
        }
        .post__text {
            background: white;
            padding: 10px 20px;
        }
    }
</style>