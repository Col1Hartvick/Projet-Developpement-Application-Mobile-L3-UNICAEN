<template>
<h1>Entrer votre nom pour vous connecter</h1>
    <div>
        <label for="userName">Nom : </label>
        <input type="text" name="userName" v-model="this.userName">
        <button v-on:click="login(this.userName)" >Se connecter</button>
    </div>
</template>

<script>
import { mapGetters,mapActions} from "vuex";

export default {
    name: 'Connexion',
    data() 
        {
            return{
                userName: ''
            }
    },
    methods:{
         ...mapActions("todo", ['addUser']),
        login(data) {
            this.addUser(data)
            this.$router.push('/')
        }
    },
    computed:{
        ...mapGetters("todo", ['getuserName']),
    }
}


</script>

<style>
</style>