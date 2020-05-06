<template>
<body id="paper">
  <el-form
    :model="loginForm"
    :rules="rules"
    class="login-container"
    label-position="left"
    label-width="0px"
    v-loading="loading"
  >
    <h3 class="login_title">系统登录</h3>
    <el-form-item prop="username">
      <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-radio-group v-model="radio" label-position="left" >
      <el-radio :label="3">普通用户登录</el-radio>
      <el-radio :label="6">管理员登录</el-radio>
    </el-radio-group>
    <el-form-item style="width: 100%">
      <el-button
        type="primary"
        style="width: 40%;background: #505458;border: none;margin-top:15px;margin-left:15px"
        v-on:click="login"
      >登录</el-button>
      <router-link to="register">
        <el-button type="primary" style="width: 40%;background: #505458;border: none;margin-left:30px">注册</el-button>
      </router-link>
    </el-form-item>
  </el-form>
</body>
</template>
<script>
export default {
  data() {
    return {
      radio: 3,
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" }
        ],
        password: [{ required: true, message: "密码不能为空", trigger: "blur" }]
      },
      checked: true,
      loginForm: {
        username: "admin",
        password: "12345"
      },
      loading: false
    };
  },
  methods: {
    login() {
      var _this = this;
      this.$axios
        .post("/login", {
          username: this.loginForm.username,
          password: this.loginForm.password
        })
        .then(resp => {
          if (resp.data.code === 200) {
            var data = resp.data.result;
            _this.$store.commit("login", data);
            this.$message.success('登录成功');
            localStorage.setItem('ms_username', this.loginForm.username);
            var path = _this.$route.query.redirect;
            _this.$router.replace({
              path: path === "/" || path === undefined ? "/index" : path
            });
          } else {
            this.$message.error('请输入账号和密码');
            return false;
            // this.$alert(resp.data.message, "用户名或密码错误", {
            //   confirmButtonText: "确定"
            // });
          }
        })
        .catch(failResponse => {});
    }
  }
};
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
body {
  margin: 0;
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
