<template>
    <nav class="sidebar__component">
        <ul class="sidebar__ul">
            <li class="sidebar__li" v-for="link in links" :key="link.id">
                <router-link class="sidebar__link" :to="link.route">{{link.title}}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            links: [
                {
                    route: {
                        name: 'dashboard'
                    },
                    title: 'Dashboard',
                    id: 0
                },
                {
                    route: {
                        name: 'posts'
                    },
                    title: 'Posts',
                    id: 1
                },
                {
                    route: {
                        name: 'login'
                    },
                    title: '> Logout',
                    id: 2
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
    .sidebar__component {
        width: 15%;
        background: blue;
        float: left;
        height: 100vh;

        .sidebar__ul {
            margin: 30px 0 0 0;
            padding: 0;

            .sidebar__li {
                text-align: start;
                padding: 5px 20px;

                .sidebar__link {
                    text-decoration: none;
                    color: white;
                    font-weight: bold;
                }

                &:hover .sidebar__link {
                    opacity: .8;
                }
            }
        }
    }


</style>