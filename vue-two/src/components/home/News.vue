<template>
  <div class="body">
    <!-- <h1>发布步骤</h1> -->
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <img src="../../assets/image/house1.png"/>
          <b>领养人须年满22岁，有稳定的工作稳定的收入和住房（不符条件：未满22岁/学生/合租/店铺不建议领养）</b>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <img src="../../assets/image/house2.png"/>
          <b>领养人必须爱护看护好动物，家里有防护栏防护。领养宠物须在一年内完成绝育和接受固定10次回访。</b>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <img src="../../assets/image/house3.png"/>
          <b>领养动物须在一年之内完成动物绝育（请及时把绝育时的照片以及医院票据发给回访人员，以便登记）</b>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <img src="../../assets/image/house4.png"/>
          <b>领养人不得因为任何理由遗弃或私下转送领养宠物，为方便回访管理，领养人勿私下将领养猫带离主城。</b>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    name: 'Step',
  }
</script>
<style scoped>
  img {
    height: 150px;
    width: 180px;
    margin: 30px;
  }

  .body {
    /* background-color: darkturquoise; */
    margin-top: 10px;
    width: 900px;
  }

  .el-row {
    margin-bottom: 20px;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
