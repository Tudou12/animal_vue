<template>
  <body id="paper">
  <el-form :model="loginForm" :rules="rules" class="login-container" label-position="left"
           label-width="0px" v-loading="loading">
    <div id="from_top">
            <h2>注册表</h2>
          </div>
          <el-form-item label="姓名">
            <el-input v-model="ruleForm2.name" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input
              type="password"
              v-model="ruleForm2.pass"
              auto-complete="off"
              placeholder="请输入"
            ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input
              type="password"
              v-model="ruleForm2.checkPass"
              auto-complete="off"
              placeholder="请输入"
            ></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="sex" placeholder="请输入">
            <el-radio-group v-model="ruleForm2.sex">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <div class="button" placeholder="请输入">
            <el-form-item style="width: 100%">
              <el-button
                type="primary"
                style="background: #505458;border: none"
                @click="resetForm('ruleForm2')"
              >重置</el-button>
              <!-- <el-button
                type="primary"
                style="background: #505458;border: none"
                @click="submitForm('ruleForm2')"
              >注册</el-button> -->
              <el-button
              type="primary"
               style="width: 40%;background: #505458;border: none"
               v-on:click="register"
               >注册</el-button>

            </el-form-item>
          </div>
        </el-form>
  </body>
</template>
<script>
  export default{
    name:"Register",
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
          name: '',
          phone: '',
          email: ''
        },
        loading: false
      }
    },
    methods: {
      register () {
        var _this = this
        this.$axios
          .post('/register', {
            username: this.loginForm.username,
            password: this.loginForm.password,
            name: this.loginForm.name,
            phone: this.loginForm.phone,
            email: this.loginForm.email
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
