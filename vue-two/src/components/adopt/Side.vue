<template>
  <el-menu
    class="adopter"
    default-active="0"
    active-text-color="red">
    <el-menu-item index="0">
      <a href="#nav-menu">
       <i class="el-icon-top"></i>
        <span slot="title">回到顶部</span>
      </a>
    </el-menu-item>
    <el-menu-item index="1">
      <a href="#why">
       <i class="el-icon-collection"></i>
        <span slot="title">为什么领养</span>
      </a>
    </el-menu-item>
    <el-menu-item index="2">
      <a href="#step">
       <i class="el-icon-postcard"></i>
        <span slot="title">如何领养</span>
      </a>
    </el-menu-item>
    <el-menu-item index="3">
      <a href="#cat">
       <i class="el-icon-s-order"></i>
        <span slot="title">领养专区</span>
      </a>
    </el-menu-item>
    <el-menu-item index="4">
      <a href="#aboot">
       <i class="el-icon-bottom"></i>
        <span slot="title">回到底部</span>
      </a>
    </el-menu-item>
    <!-- <el-menu-item index="3">
      <a href="ApplyList">
        <span slot="title">我的申请</span>
      </a>
    </el-menu-item>
    <el-menu-item index="4">
      <a href="AdoptManage">
        <span slot="title">领养管理</span>
      </a>
    </el-menu-item> -->
  </el-menu>
</template>

<script>
  export default {
    name: 'Side',
    data() {
      return {
        aid: ''
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
  .adopter {
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
