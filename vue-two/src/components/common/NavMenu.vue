<template>
  <div class="nav">
    <el-menu
      :default-active="path"

      mode="horizontal"
      el-menu
      class="el-menu-demo"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      style="min-width: 100%;position: relative;margin-top: 0px"
    >
      <span style="position: absolute;padding-top: 10px;right: 43%; font-size: 25px; font-weight: bold; color:#FFFFFF">流浪动物社区</span>
      <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">{{ item.navItem }}</el-menu-item>
      <div class="right">
        <!-- <a href="Login" style="color: #FFFFFF;float: right;padding: 15px;">登录</a> -->
       <my style="color: #FFFFFF;float: right;padding: 20px;">我的</my>
      </div>
    </el-menu>
  </div>
</template>

<script>
import My from "../my/My";
import AdminHome from "../my/AdminHome";

export default {
  name: "NavMenu",
  components: { My,AdminHome },
  data() {
    return {
      navList: [
        { name: "/index", navItem: "首页" },
        { name: "/Adopt", navItem: "领养" },
        { name: "/Voluntary", navItem: "志愿者" },
        { name: "/DonateHome", navItem: "爱心捐赠" },
        // { name: "/Taobao", navItem: "爱心小店" }
      ],
      keywords: "",
    };
  },
  mounted: {
  },
  computed: {
    hoverBackground () {
        return '#E6A23C'
      },
    path() {
    // 获得第一级路由，以设置导航栏高亮
    var x = this.$route.path.indexOf("/", 1);
    if (x !== -1) {
      this.path = this.$route.path.substring(0, x);
    } else {
      this.path = this.$route.path;
    }
  },
  },
  methods: {}
};
</script>

<style scoped>
a {
  text-decoration: none;
}

span {
  pointer-events: none;
}
.right {
  text-align: center;
}
.nav {
  /* position:fixed; */
  height: 100%;
  width: 100%;
}
/* .el-icon-switch-button {
    cursor: pointer;
    outline:0;
  } */
</style>
