<template>
  <div >
    <nav-menu></nav-menu>
    <div class="body">
      <router-view/>
      <img src="../../assets/image/home4.png" style="width:98%;hight:50px;margin:20px;"/>
      <div class="News">
        <News id="News" class="area"></News>
      </div>
      <div class="Step">
        <Step id="Step" class="area"></Step>
      </div>
      <div class="dog">
        <dog id="dog" class="area"></dog>
      </div>
      <div class="cat">
        <cat id="cat" class="area"></cat>
      </div>
      <el-row>
      </el-row>
    </div>
  </div>
</template>
<script>
  import NavMenu from '../common/NavMenu';
  import Dog from './Dog';
  import Step from '../home/Step';
  import Cat from '../home/Cat';
  import News from '../home/News';

  export default {
    name: "Home",
    components: {NavMenu, Dog, Cat, News, Step},
    data() {
      return {};
    },
    methods: {
    }
  };
</script>
<style>
  .body {
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
    background-color: #FFFFFF;
    /*padding: 10px;*/
  }
  .area{
  }
</style>
