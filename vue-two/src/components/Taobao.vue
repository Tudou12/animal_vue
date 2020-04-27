<template>
  <div>
    <nav-menu></nav-menu>
    <router-view/>
    <a href="https://shop62573751.taobao.com/">点击进入中国小动物保护协会公益店</a><hr>
    <a href="https://shop104872587.taobao.com/">点击进入中国导盲犬大连培训基地公益店</a><hr>
    <a href="https://www.taobao.com/markets/gy/index?spm=a213c1.12677307.9932592779.1.2e235f4f9ku93v">点击进入阿里巴巴公益专区</a>
  </div>
</template>
<script>
import NavMenu from "../components/common/NavMenu"
export default {
name:"Taobao",
components:{NavMenu}
}
</script>
<style>

</style>
