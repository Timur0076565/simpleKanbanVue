<template>
    <div class="main">
        <SideBar />
        <transition name="fade">
          <router-view />
        </transition>
    </div>
</template>

<script>
import SideBar from '../components/SideBar.vue'


export default {
  components: {
    SideBar
  }
}
</script>

<style>
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
