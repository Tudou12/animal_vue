<template>
  <div>
    <nav-menu></nav-menu>
    <router-view/>
  </div>
</template>

<script>
  import NavMenu from '../common/NavMenu';

  export default {
    name: 'DonateHome',
    components: {NavMenu}

  }
</script>

<style>
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
