<template>
  <div class="footer">
    <div style="width:1000px;margin-left:200px;">
      <el-row :gutter="20">
      <p class="alt" style="color:white;margin-top: 20px;">&copy;  &nbsp;
        <span>土豆君</span>
      </p>
      </el-row>
      <el-row :gutter="20" style="color:white;">
        <el-col :span="6" ><b>爱心淘宝店专区</b></el-col>
        <el-col :span="6"><a target="_blank"  href="https://shop62573751.taobao.com/">中国小动物保护协会公益店</a></el-col>
        <el-col :span="6"><a target="_blank"  href="https://shop104872587.taobao.com/">中国导盲犬大连培训基地公益店</a></el-col>
        <el-col :span="6"><a target="_blank"  href="https://www.taobao.com/markets/gy/index?spm=a213c1.12677307.9932592779.1.2e235f4f9ku93v">进入阿里巴巴公益专区</a></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style scoped>

  * {
    margin: 0;
    padding: 0;
    font-family: '微软雅黑', Arial, Helvetica, sans-serif;
  }
  .footer {
    font-size: 12px;
    background: #2b2e33;
    width: 100%;
    height: 150px;
    margin-top: 30px;
  }

 .alt {
    /* overflow: hidden; */
    padding: 20px 0;
    width: 100%;
    margin: auto;
  }

  a{
    text-decoration: none;
  }
</style>
