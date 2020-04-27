<template>
  <div class="body">
    <h2>发布步骤</h2>
    <div class="button_dog">
      <el-button  size="medium" type="text" @click="dialogFormVisible = true">
        <h2>我要发布</h2>
        <i size="big" class="el-icon-thumb" ></i>
      </el-button>
    </div>
    <div class="step">
      <el-steps :active="4" align-center>
        <el-step title="步骤1" description="如有宠物丢失或捡到丢失宠物请点击“我要发布"></el-step>
        <el-step title="步骤2" description="根据具体情况填写表格中的信息"></el-step>
        <el-step title="步骤3" description="注意联系方式很重要哦，在确定无误后点击发布"></el-step>
        <el-step title="步骤4" description="如有看到相关丢失宠物消息可通过信息中的联系方式联系"></el-step>
      </el-steps>
      <release-from></release-from>
    </div>
  </div>
</template>
<script>
  import ReleaseFrom from './ReleaseFrom'

  export default {
    name: "Step",
    components: {ReleaseFrom,},
  }
</script>
<style scoped>
  h2 {
    text-align: center;
  }
  .button_dog{
    text-align: center;
    margin: 0px;
  }
  .body {
    width: 900px;
    margin-top: 10px;
    border-style: dashed;
    border-color: lightblue;
  }
</style>
