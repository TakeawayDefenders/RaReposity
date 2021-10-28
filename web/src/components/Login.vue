
<template>
  <div>
    <input class="login-input" type="text"  v-model="username" placeholder="请输入账号">
    <br /><br />
    <input class="login-input" type="password" v-model="password" placeholder="请输入密码">
    <br /><br />
    <button  @click="login" type="submit">登陆</button>
    <button  @click="registration" type="submit">注册</button>
  </div>
</template>


<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      console.log(this.username)
      console.log(this.password)
    },

    registration() {
      console.log(this.username)
      console.log(this.password)
    }

  }
}
</script>





<style scoped>

</style>