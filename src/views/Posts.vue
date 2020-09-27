<template>
    <div class="posts__view">
        <div class="posts__nav">
            <div class="posts__search">
                <input class="posts__input" type="text" v-model="searchPost" />
                <button class="posts__btn" @click="search = searchPost ">Search</button>
            </div>
            <div class="posts__selects">
                <div class="posts__select_wrapper">
                    <label class="posts__label">{{boards.selects.label}}</label>
                    <select class="posts__select" v-model="boards.selects.selected">
                        <option 
                            v-for="(option, index) in boards.selects.sort" :key="index"
                            :value="option.value"
                        >{{option.name}}</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="posts__content">
            <Post 
                v-for="post in filteredPosts"
                :key="post.id"
                :post="post"
            />
        </div>
    </div>
</template>

<script>
import Post from '../components/Post.vue'
import {mapState, mapGetters} from 'vuex'


export default {
    components: {
        Post
    },
    data() {
        return {
            searchPost: '',
            search: '',
        }
    },
    computed: {
        ...mapState(['boards', 'selects']),
        ...mapGetters(['filteredBySelects']),
        filteredPosts() {
            return this.filteredBySelects.filter(post => {
                return post.title.toLowerCase().includes(this.search.toLowerCase())
            }
        )},

    },
}
</script>

<style lang="scss" scoped>
    .posts__nav {
        padding: 30px 20px 0;

        .posts__search {
            display: flex;
            width: 65%;
            margin-bottom: 10px;

            .posts__input {
                width: 100%;
                padding: 9px 0 9px 5px;
                border: 1px solid blue;
                border-bottom-left-radius: 3px;
                border-top-left-radius: 3px;
            }
            .posts__btn {
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
    }
    .posts__nav,
    .posts__selects {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }
    .posts__selects {
        margin-bottom: 10px;

        .posts__select_wrapper {
            margin-left: 10px;

            .posts__label {
                font-size: 14px;
                padding-right: 5px;
            }
            .posts__select {
                width: 128px;
                padding: 8px 0px 8px 0;
                background: white;
                color: blue;
                font-size: 14px;
                border-radius: 3px;
                border-color: blue;
                outline: none;
            }
        }
    }
    .posts__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: auto;
        height: 96vh;
    }
</style>