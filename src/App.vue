<template>
  <Sidebar/>
  <Todoliste/>
</template>

<script>
import Todoliste from './components/Todoliste.vue'
import Sidebar from './components/Sidebar.vue'
export default {
  name: 'App',
  components: {
    Todoliste,
    Sidebar
  }
}
</script>

<style>
</style>