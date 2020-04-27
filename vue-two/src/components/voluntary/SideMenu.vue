<template>
  <el-menu
    class="Side"
    default-active="0"
    active-text-color="red">
    <el-menu-item index="0">
      <a href="#vol-introduce">
        <span slot="title">志愿者介绍</span>
      </a>
    </el-menu-item>
    <el-menu-item index="1">
      <a href="#activity">
        <span slot="title">一日志愿者</span>
      </a>
    </el-menu-item>
    <el-menu-item index="2">
      <a href="#his-activity">
        <span slot="title">往期回顾</span>
      </a>
    </el-menu-item>
    <el-menu-item index="3">
      <a href="#activity-list">
        <span slot="title">活动申请</span>
      </a>
    </el-menu-item>
    <el-menu-item index="4">
      <a href="#activity-manage">
        <span slot="title">志愿者活动管理</span>
      </a>
    </el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    name: 'SideMenu'
  }
</script>

<style scoped>
  .Side {
    position: fixed;
    margin-left: 5px;
    top: 100px;
    width: 150px;
    box-shadow: #FFFFCC 0px 0px 5px 5px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
</style>
