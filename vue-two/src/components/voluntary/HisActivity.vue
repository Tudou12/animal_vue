<template>
  <div class="history">
    <div class="title">
      <h1>往期回顾</h1>
    </div>
    <el-card style="margin-top:15px">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content">
          <img src="../../assets/image/7.jpg"/>
          <b>领养日活动</b>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <img src="../../assets/image/7.jpg"/>
          <b>回访日活动</b>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <img src="../../assets/image/7.jpg"/>
          <b>犬舍服务</b>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <img src="../../assets/image/7.jpg"/>
          <b>犬舍服务</b>
        </div>
      </el-col>
    </el-row>
    </el-card>
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

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  img {
    height: 190px;
    width: 190px;
  }
</style>
