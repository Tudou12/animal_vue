<template>
<div>
   <nav-menu></nav-menu>
    <router-view/>
  <div>
    <side-menu id="side-menu"></side-menu>
      <about id="about"></about>
  </div>
</div>
</template>

<script>
  import NavMenu from '../common/NavMenu';
  import About from '@/components/common/About'

  export default {
    name: 'MineHome',
    components: {NavMenu,About}
  }


</script>

<style>
  .home {
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
    /* margin-top: -20px; */
  }

  #header-div {
    padding-bottom: 20px;
    padding-left: 5px;
    background-color: white;
  }

  #side-menu {
    position: fixed;
    margin-left: 50%;
    left: -680px;
    top: 100px;
  }
  .donation {
    position: fixed;
    margin-left: 50%;
    left: -665px;
    top: 100px;
    width: 150px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
</style>
