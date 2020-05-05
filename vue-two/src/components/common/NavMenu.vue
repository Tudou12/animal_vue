<template>
  <div class="nav">
    <el-menu
      :default-active="path"
      router
      mode="horizontal"
      background-color="#484848"
      text-color="#D8D8D8	"
      active-text-color="#FFFFFF"
    >
      <!-- style="min-width: 100%;position: relative;margin-top: 0px" -->
      <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">{{ item.navItem }}</el-menu-item>
      <span
        style="position: absolute;
      padding-top: 10px;
      right: 43%;
      font-size: 25px;
      font-weight: bold;
      color:#FFFFFF"
      >流浪动物社区</span>
      <div class="right">
        <a href="Login" style="color: #FFFFFF;float: right;padding: 15px;">登录</a>
        <el-dropdown class="user-name" trigger="click" @command="handleCommand">
          <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
        {{ item.navItem }}
      </el-menu-item>
          <el-dropdown-menu slot="dropdown">
            <my-home style="color: #FFFFFF;float: right;padding: 5px;">我的</my-home>
            <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-menu>
  </div>
</template>

<script>
import MyHome from "../my/MyHome";
export default {
  name: "NavMenu",
  components: { MyHome },
  data() {
    return {
      navList: [
        { name: "/index", navItem: "首页" },
        { name: "/Adopt", navItem: "领养" },
        { name: "/Voluntary", navItem: "志愿者" },
        { name: "/DonateHome", navItem: "爱心捐赠" },
        { name: "/Taobao", navItem: "爱心小店" }
      ],
      keywords: "",
    };
  },
  mounted: {
  },
  computed: {
    hoverBackground() {
      return "#ffd04b";
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
</style>
