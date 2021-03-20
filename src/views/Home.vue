<template>
  <div class="home">
    <Sidebar/>
    <Todoliste/>
  </div>
</template>

<script>
// @ is an alias to /src
import Todoliste from '@/components/Todoliste.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'Home',
  components: {
    Sidebar,
    Todoliste
  }
}
</script>
