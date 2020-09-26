<template>
    <nav class="sidebar__component">
        <ul class="sidebar__ul">
            <li class="sidebar__li">
                <router-link class="sidebar__link" :to="{name: 'dashboard'}">Dashboard</router-link>
            </li>
            <li class="sidebar__li">
                <router-link class="sidebar__link" :to="{name: 'posts'}">Posts</router-link>
            </li>
            <li class="sidebar__li">
                <router-link class="sidebar__link" :to="{name: 'login'}"> > Logout</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    
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
                }
            }
        }
    }


</style>