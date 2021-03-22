<template>
  <h1>TodosLists</h1>
  <div>
    <router-link v-on:click="logout()" v-if="getId != ''" to="/">Logout</router-link>
  </div>
  <router-view/>
</template>

<script>
import { mapActions , mapGetters } from "vuex";

export default {
  name: 'App',
  methods:{
        ...mapActions("account", ['logout']),
    },
  computed:{
        ...mapGetters("account", ['getErrorLogin', 'getErrorSignIn', 'getId']),
    }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

input{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
