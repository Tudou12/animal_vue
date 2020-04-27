<template>
  <el-menu
    :default-active="path"
    router
    mode="horizontal"
    background-color="#484848"
    text-color="#D8D8D8	"
    active-text-color="#FFFFFF"
    style="min-width: 100%;position: relative;margin-top: 0px">
    <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
      {{ item.navItem }}
    </el-menu-item>
    <a href="Login" style="color: #FFFFFF;float: right;padding: 15px;">登录</a>
    <span style="position: absolute;
      padding-top: 10px;
      right: 43%;
      font-size: 25px;
      font-weight: bold;
      color:#FFFFFF">
        流浪动物社区
    </span>
  </el-menu>
</template>

<script>
  export default {
    name: 'NavMenu',
    data() {
      return {
        navList: [
          {name: '/index', navItem: '首页'},
          {name: '/Adopt', navItem: '领养'},
          {name: '/Voluntary', navItem: '志愿者'},
          {name: '/Donation', navItem: '爱心捐赠'},
          {name: '/Taobao', navItem: '爱心小店'}
        ],
        keywords: '',
        path: ''
      }
    },
    mounted: function () {
      // 获得第一级路由，以设置导航栏高亮
      var x = this.$route.path.indexOf('/', 1)
      if (x !== -1) {
        this.path = this.$route.path.substring(0, x)
      } else {
        this.path = this.$route.path
      }
    },
    computed: {
      hoverBackground() {
        return '#ffd04b'
      }
    },
    methods: {}
  }
</script>

<style scoped>
  a {
    text-decoration: none;
  }

  span {
    pointer-events: none;
  }
</style>
