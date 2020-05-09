<template>
  <body id="paper">
  <el-form :model="loginForm" :rules="rules" class="login-container" label-position="left"
           label-width="0px" v-loading="loading">
    <div id="from_top">
            <h2 style="text-align: center;">注册表</h2>
          </div>
          <el-form-item style="margin-top:20px;" prop="username" >
            <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item  prop="password">
            <el-input
              type="password"
              v-model="loginForm.password"
              auto-complete="off"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item  prop="checkPass">
            <el-input
              type="password"
              v-model="loginForm.checkPass"
              auto-complete="off"
              placeholder="请再次输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item  prop="sex" placeholder="请选择性别">
            <el-radio-group v-model="loginForm.sex">
              <el-radio value="1" label="1">男</el-radio>
              <el-radio value="2" label="2">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <div class="button" placeholder="请输入">
            <el-form-item style="width: 100%">
              <!-- <el-button
                type="primary"
                style="background: #505458;border: none"
                @click="resetForm('loginForm')"
              >重置</el-button> -->
              <el-button
                type="text"
                @click="back()"
              >返回上一步</el-button>
              <el-button
              type="primary"
               style="width: 40%;background: #505458;border: none; margin-left:130px" v-on:click="register"
               >注册</el-button>

            </el-form-item>
          </div>
        </el-form>
  </body>
</template>
<script>
  export default{
    // name:"Register",
    data () {
      return {
        rules: {
          username: [{required: true, message: '用户名不能为空', trigger: 'blur'}],
          password: [{required: true, message: '密码不能为空', trigger: 'blur'}]
        },
        checked: true,
        loginForm: {
          username: '',
          password: '',
          checkpass:'',
          sex: '',
        },
        loading: false
      }
    },
    methods: {
      back(){
        this.$router.replace({
              path: "/login",
            });
      },
      register () {
        var _this = this
        this.$axios
          .post('/register', {
            username: this.loginForm.username,
            password: this.loginForm.password,
            sex: this.loginForm.sex,
          })
          .then(resp => {
            if (resp.data.code === 200) {
              this.$alert('注册成功', '提示', {
                confirmButtonText: '确定'
              })
              _this.$router.replace('/login')
            } else {
              this.$alert(resp.data.message, '提示', {
                confirmButtonText: '确定'
              })
            }
          })
          .catch(failResponse => {})
      }
    }
  }
</script>
<style>
  #paper {
    /* background:url("../assets/img/bg/eva1.jpg") no-repeat; */
    background-color: darkseagreen;
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;

  }
  body{
    margin: -5px 0px;
  }
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
  .login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .login_remember {
    margin: 0px 0px 35px 0px;
    text-align: left;
  }
</style>
