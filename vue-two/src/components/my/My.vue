<template>
  <div>
    <nav-menu></nav-menu>
    <el-dropdown class="user-name" trigger="click" @command="handleCommand">
      <span class="el-dropdown-link" style="color:#FFFFFF">
        <i class="el-icon-user"></i>
        {{username}}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <!-- <el-dropdown-item   command="a">我的发布</el-dropdown-item>
        <el-dropdown-item  divided command="b">我的申请</el-dropdown-item>-->
        <el-dropdown-item divided command="mineHome">我的个人中心</el-dropdown-item>
        <el-dropdown-item icon="el-icon-switch-button" divided command="login">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import NavMenu from "../common/NavMenu";

export default {
  name: "My",
  components: { NavMenu },
  data() {
    return {
      // drawer: false
    };
  },
  computed: {
    username() {
      let username = localStorage.getItem("ms_username");
      return username ? username : this.name;
    }
  },
  methods: {
    handleCommand(command) {
      if (command === "login") {
        this.$router.replace({
          path: "/login"
        })
      }if(command === "mineHome"){
        this.$router.replace({
          path: "/mineHome"
        })
      }else{

      }
    }
  }
};
</script>

<style>
a {
  text-decoration: none;
  color: inherit;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
