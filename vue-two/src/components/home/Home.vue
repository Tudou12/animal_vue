<template>
  <div class="home">
    <nav-menu></nav-menu>
    <div class="body">
      <div class="area">
        <img src="../../assets/image/home4.png" style="width:100%;hight:50px;margin-top:20px;" />
        <div class="News">
          <News id="News"></News>
        </div>
        <div class="Step">
          <Step id="Step"></Step>
        </div>
        <search-bar/>
        <div class="dog">
          <dog id="dog"></dog>
        </div>
        <div class="cat">
          <cat id="cat"></cat>
        </div>
      </div>
      <!-- <el-row></el-row> -->
    </div>
    <About></About>
  </div>
</template>
<script>
import NavMenu from "../common/NavMenu";
import Dog from "./Dog";
import Step from "../home/Step";
import Cat from "../home/Cat";
import News from "../home/News";
import About from '@/components/common/About'
import SearchBar from "../common/SearchBar"
export default {
  name: "Home",
  components: { NavMenu, Dog, Cat, News, Step, About, SearchBar},
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
  background-color: #ffffff;
}

.area {
  width: 900px;
  margin-left: auto;
  margin-right: auto;
}
#dog {
  width: 900px;
  height: 600px;
}
#cat {
  width: 900px;
}
</style>
