<template>
  <div id="from_body">
    <!-- <img src="../../assets/image/top.jpg" style="width：80%" /> -->
    <div id="from">
      <div id="re_from">
        <el-form
          :label-position="labelPosition"
          label-width="80px"
          :model="ruleForm2"
          :rules="rules2"
        >
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
              <el-button
                type="primary"
                style="background: #505458;border: none"
                @click="submitForm('ruleForm2')"
              >注册</el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      labelPosition: "top",
      ruleForm2: {
        name: "",
        sex: "",
        age: "",
        pass: "",
        checkPass: ""
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    gologin() {
      this.$router.push("/Login");
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style>
*{
     margin: 0px;
}
#from_body {
   background-color: darkseagreen;
   width: 100%;
   height: 900%;
}

#re_from{
  border-radius: 15px;
  background-clip: padding-box;
  margin:90px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
</style>

