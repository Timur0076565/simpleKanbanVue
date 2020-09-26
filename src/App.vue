<template>
  <div id="app">
    <component :is="layout">
      <!-- <transition name="fade"> -->
        <router-view />
      <!-- </transition> -->
    </component>
  </div>
</template>

<script>
import EmptyLayout from './layouts/EmptyLayout.vue'
import MainLayout from './layouts/MainLayout.vue'


export default {
  name: 'App',
  components: {
    EmptyLayout,
    MainLayout
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-leave-active  {
  transition: opacity 0.5s;
}
.fade-leave-to {
  opacity: 0;
}
</style>
