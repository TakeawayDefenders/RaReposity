<template>

  <div id="App">
    <Affix></Affix>
    <Login></Login>
    <CookMain></CookMain>

<!--    <router-link to="/test" >
      <h1 v-on:click="seeTest">test</h1>
    </router-link>
    <router-link to="/helloworld">helloworld</router-link>
    <div  v-if="seen">
    <img class="logo" alt="CloudBase logo" src="./assets/cloudbase.png" />
    <img class="logo" alt="Vue logo" src="./assets/logo.png" />-->
<!--    <HelloWorld msg="欢迎使用云开发 CloudBase Vue.js App" />-->
<!--    </div>
    <router-view></router-view>-->
  </div>
</template>

<script>


import Affix from './components/Affix.vue';
import Login from './components/Login.vue';
import CookMain from './components/cook/CookMain.vue';


export default {
  name: "App",
  data(){
    return{
        seen: true,
    }
  },
  components:{
    CookMain,
    Affix,
    Login,
  },

  methods:{
    async seeTest () {
      this.seen= false;
       console.log('hello')
    }
    },


};



</script>

<style>
#App {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo {
  width: 120px;
  padding: 10px;
}
</style>
