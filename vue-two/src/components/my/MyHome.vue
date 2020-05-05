<template>
  <div>
    <nav-menu></nav-menu>
    <i class="el-icon-user" @click="drawer = true"></i>
    <el-drawer
    title="我的"
    :visible.sync="drawer"
    :with-header="true"
    size="30%">
    <div class="collapse">
      <el-collapse accordion>
        <el-collapse-item>
          <template slot="title">
            我的发布
            <i class="header-icon el-icon-info"></i>
          </template>
          <div></div>
        </el-collapse-item>
        <el-collapse-item>
        <template slot="title">
            我的申请
            <i class="header-icon el-icon-info"></i>
          </template>
          <div>领养申请</div>
          <div>活动申请</div>
          <div>捐赠申请</div>
        </el-collapse-item>
        <el-collapse-item title="我的个人信息">
          <div></div>
        </el-collapse-item>
      </el-collapse>
      <a> 退出登录</a>
    </div>
    </el-drawer>
  </div>
</template>

<script>
import NavMenu from "../common/NavMenu";

export default {
  name: "MyHome",
  components: { NavMenu },
  data() {
    return {
      drawer: false
    };
  },
  methods: {}
};
</script>

<style>
.donation {
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
.collapse{
  margin-left: 20px;
  margin-right: 20px;
}
</style>
