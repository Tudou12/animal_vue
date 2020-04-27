<template>
  <el-menu
    class="adopter"
    default-active="0"
    @select="handleSelect"
    active-text-color="red">
    <el-menu-item index="0">
      <a href="#why">
        <i class="el-icon-menu"></i>
        <span slot="title">为什么领养</span>
      </a>
    </el-menu-item>
    <el-menu-item index="1">
      <a href="#step">
        <i class="el-icon-menu"></i>
        <span slot="title">如何领养</span>
      </a>
    </el-menu-item>
    <el-menu-item index="2">
      <a href="#cat">
        <i class="el-icon-menu"></i>
        <span slot="title">领养专区</span>
      </a>
    </el-menu-item>
    <el-menu-item index="3">
      <a href="ApplyList">
        <i class="el-icon-menu"></i>
        <span slot="title">我的申请</span>
      </a>
    </el-menu-item>
    <el-menu-item index="4">
      <a href="AdoptManage">
        <i class="el-icon-menu"></i>
        <span slot="title">领养管理</span>
      </a>
    </el-menu-item>
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
      handleSelect(key, keyPath) {
        this.aid = key
        this.$emit('indexSelect')
      }
    }
  }
</script>

<style scoped>
  .adopter {
    position: fixed;
    margin-left: 50%;
    left: -665px;
    top: 100px;
    width: 150px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
</style>
