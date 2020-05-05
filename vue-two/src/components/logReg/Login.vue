<template>
  <div class="body">
    <el-form class="login-container"
             label-position="left"
             label-width="0px">
      <h3 class="login_title">系统登录</h3>
      <el-form-item>
        <el-input type="text" v-model="loginForm.username"
                  auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" v-model="loginForm.password"
                  auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item style="width: 100%">
        <el-button type="primary" style="width: 48%;background: #505458;border: none;float: left;" @click="login">登录
        </el-button>
        <el-button type="primary" style="width: 48%;background: #505458;border: none;" @click="goReg">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

  export default {
    name: 'Login',
    data() {
      return {
        loginForm: {
          username: 'admin',
          password: '12345'
        },
        responseResult: []
      }
    },
    methods: {
      login() {
        var _this = this
        console.log(this.$store.state)
        this.$axios
          .post('/login', {
            username: this.loginForm.username,
            password: this.loginForm.password
          })
          .then(successResponse => {
            if (successResponse.data.code === 200) {
              _this.$store.commit('login', _this.loginForm)
              var path = this.$route.query.redirect
              this.$router.replace({path: path === '/' || path === undefined ? '/index' : path})
            }
            else{

            }
          })
          .catch(failResponse => {
          })
      },
      goReg() {
        this.$router.push("/Register");
      },
    }
  }
</script>
<style>
  .login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .body {
    background-color: darkseagreen;
    /* background:url("../../assets/image/login1.jpg") no-repeat; */
    /* background-position: right;*/
    height: 100%;
    width: 100%;
    background-size: cover;
    /* position: fixed; */
    margin: 0px;
  }
</style>
