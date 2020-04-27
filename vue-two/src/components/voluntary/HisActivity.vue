<template>
  <div class="history">
    <div class="title">
      <h1>往期回顾</h1>
    </div>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <img src="../../assets/image/7.jpg"/>
          <b>领养日活动</b>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <img src="../../assets/image/7.jpg"/>
          <b>回访日活动</b>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <img src="../../assets/image/7.jpg"/>
          <b>犬舍服务</b>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <img src="../../assets/image/7.jpg"/>
          <b>犬舍服务</b>
        </div>
      </el-col>
      <!--<el-col :span="6"><div class="grid-content bg-purple"></div></el-col> -->
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'HisActivity',
  }
</script>

<style>
  .title {
    text-align: center;
  }

  .history {
    width: 900px;
    text-align: center;
    margin: auto;
  }

  .el-row {
    margin-bottom: 20px;
  }

  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  img {
    height: 200px;
    width: 220px;
  }
</style>
