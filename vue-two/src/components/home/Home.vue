<template>
  <div class="home">
    <nav-menu></nav-menu>
    <div class="body">
      <router-view/>
      <div class="area">
        <img src="../../assets/image/home4.png" style="width:100%;hight:50px;margin-top:20px;"/>
        <div class="News">
          <News id="News" ></News>
        </div>
        <div class="Step">
          <Step id="Step" ></Step>
        </div>
        <div class="dog">
          <dog id="dog" ></dog>
        </div>
        <div class="cat">
          <cat id="cat" ></cat>
        </div>
        <el-row>
        </el-row>
      </div>
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
    methods: {}
  };
</script>
<style>
  .body {
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
    background-color: #FFFFFF;
  }
  .area {
    width: 900px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
