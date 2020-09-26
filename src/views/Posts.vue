<template>
    <div class="posts__view">
        <div class="posts__content">
            <Post 
                v-for="post in posts.posts"
                :key="post.id"
                :post="post"
            />
        </div>
    </div>
</template>

<script>
import Post from '../components/Post.vue'
import {mapState, mapActions} from 'vuex'


export default {
    components: {
        Post
    },
    computed: {
        ...mapState(['posts'])
    },
    created() {
        this.getPosts()
    },
    methods: {
        ...mapActions([
            'getPosts'
        ]),
    }
}
</script>

<style lang="scss" scoped>
    .posts__content {
        padding-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: auto;
        height: 96vh;
    }
</style>