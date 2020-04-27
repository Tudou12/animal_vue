<template>
  <div style="display: flex;justify-content: center;align-items: center;">
    <el-input
      @keyup.enter.native="searchClick"
      placeholder="通过丢失宠物类型搜索..."
      prefix-icon="el-icon-search"
      size="small"
      style="width: 400px;margin-right: 10px;margin-top: 20px"
      v-model="keywords">
    </el-input>
    <el-button size="small" type="primary" icon="el-icon-search" @click="searchClick" style="margin-top: 20px">搜索</el-button>
  </div>
</template>

<script>
    export default {
      name: 'SearchBar',
      data () {
        return {
          keywords: '',
          cats: [],
          cardLoading: []
        }
      },
      methods: {
        searchClick () {
          this.$emit('onSearch')
        }
      }
    }
</script>
<style scoped>
</style>
