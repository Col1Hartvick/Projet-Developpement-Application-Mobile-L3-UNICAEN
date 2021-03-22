<template>
  <div>
    <h1>Login</h1>
    <p><input type="text" placeholder="E-mail" v-model="this.emailLogin"></p>
    <p><input type="password" placeholder="Password" v-model="this.passwordLogin"></p>
    <p><button v-on:click="login([this.emailLogin, this.passwordLogin]),changePage()">Login</button></p>
    <p class="error">{{getErrorLogin}}</p>
  </div>
  <div>
    <h1>Sign in</h1>
    <p><input type="text" placeholder="Name" v-model="this.nameSignIn"></p>
    <p><input type="text" placeholder="E-mail" v-model="this.emailSignIn"></p>
    <p><input type="password" placeholder="Password" v-model="this.passwordSignIn"></p>
    <p><button v-on:click="signIn([this.nameSignIn, this.emailSignIn, this.passwordSignIn])">Sign in</button></p>
    <p class="error">{{getErrorSignIn}}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: 'Login',
  data() 
        {
            return{
                emailLogin: '',
                passwordLogin: '',
                errorLogin: '',
                nameSignIn: '',
                emailSignIn: '',
                passwordSignIn: '',
            }
    },
  components: {
  },
  methods:{
        ...mapActions("account", ['login', 'signIn']),
        changePage(){
          setTimeout(() => {  
            if(this.getId != ""){
              this.$router.push('/todoslist');
            }
          }, 1000);
        }
    },
  computed:{
        ...mapGetters("account", ['getErrorLogin', 'getErrorSignIn', 'getId']),
    }
}
</script>
<style>
  .error {color: red;}
</style>