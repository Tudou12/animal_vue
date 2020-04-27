<template>
  <div class="body_adopt">
    <nav-menu></nav-menu>
    <router-view/>
    <Side @indexSelect="listByCategory" ref="side"></Side>
    <div id="adopt">
      <div id="why">
        <why ></why>
      </div>
      <div id="step">
        <step ></step>
      </div>
      <div id="cat">
        <stray-cat  ref="strayCat"></stray-cat>
      </div>
    </div>
  </div>
</template>
<script>
  import NavMenu from '../common/NavMenu';
  import Side from '../adopt/Side';
  import StrayCat from "../adopt/StrayCat";
  // import StrayDog from "../adopt/StrayDog";
  import Why from "../adopt/Why";
  import Step from "../adopt/Step";

  export default {
    name: 'Adopt',
    components: {NavMenu, Side, StrayCat, Why, Step},
    data() {
      return {};
    },
    methods: {
      listByCategory() {
        var _this = this
        var aid = this.$refs.side.aid
        var url = 'category/' + aid + '/strays'
        this.$axios.get(url).then(resp => {
          if (resp && resp.status === 200) {
            _this.$refs.strayCat.side = resp.data
          }
        })
      }
    }
  };
</script>
<style>
  *{
    margin: 0px;
  }
  #adopt {
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
    background-color: #FFFFFF;
  }
</style>
