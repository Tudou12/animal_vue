<template>
  <div class="body">
    <h1>发布步骤</h1>
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

  .body {
    /* background-color: darkturquoise; */
    margin-top: 10px;
    border-style: dashed;
    border-color: lightblue;
  }

  /* .el-steps{
  margin: 20px;
  } */

</style>
