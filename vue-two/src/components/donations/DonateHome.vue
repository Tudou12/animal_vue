<template>
<div>
   <nav-menu></nav-menu>
    <router-view/>
  <div>
    <side-menu id="side-menu"></side-menu>
      <div class="donate_home">
        <div id="header-div">
          <div style="height: 150px"></div>
          <carousel></carousel>
          <quick-nav style="float: right;margin-top: -450px;margin-right: 480px"></quick-nav>
        </div>
        <update-card id="update-card"></update-card>
      </div>
      <slogan id="slogan"></slogan>
      <about id="about"></about>
  </div>
</div>
</template>

<script>
  import NavMenu from '../common/NavMenu';
  import Carousel from './Carousel'
  import QuickNav from './QuickNav'
  import Slogan from './Slogan'
  import About from '@/components/common/About'
  import UpdateCard from './UpdateCard'
  import SideMenu from './SideMenu'
  export default {
    name: 'DonateHome',
    components: {NavMenu,Carousel, QuickNav, Slogan, About, UpdateCard, SideMenu}

  }


</script>

<style>
  .donate_home {
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
    /* margin-top: -20px; */
  }

  #header-div {
    padding-bottom: 20px;
    /* padding-left: 5px; */
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
