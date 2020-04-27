<template>
  <div>
    <h3>走失猫咪区</h3>
    <b> 走失猫咪区</b>
    <el-row style="height: 250px;">
      <el-tooltip effect="dark" placement="right"
                  v-for="item in losts"
                  :key="item.id">
        <p slot="content" class="card"><img :src="item.aImage" alt="封面" class="big"></p>
        <p slot="content" class="card">姓名：{{item.aName}}</p>
        <p slot="content" class="card">品种：{{item.aKind}}</p>
        <p slot="content" class="card">性别：{{item.aSex}}</p>
        <p slot="content" class="card">联系方式：{{item.aPhone}}</p>
        <p slot="content" class="card">捡到或丢失时间{{item.aTime}}</p>
        <p slot="content" class="card">具体详情：{{item.aDetail}}</p>
        <el-card style="width: 180px;margin-bottom: 20px;height: 250px;float: left;margin-right: 18px"
                 class="lost"
                 bodyStyle="padding:10px" shadow="hover">
          <div class="cover">
            <img :src="item.aImage" alt="封面">
          </div>
          <div class="info">
            <div class="Name">
              <a href="">品类：{{item.aKind}}</a>
            </div>
          </div>
          <div class="Kind">联系方式：{{item.aPhone}}
          </div>
        </el-card>
      </el-tooltip>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Cat',
    data() {
      return {
        losts: [],
      }
    },
    mounted: function () {
      this.loadlosts()
    },
    methods: {
      loadlosts() {
        var _this = this
        this.$axios.get('/category/2/losts').then(resp => {
          if (resp && resp.status === 200) {
            _this.losts = resp.data
          }
        })
      },
      adoptCat(item) {
        this.$refs.edit.dialogFormVisible = true
        this.$refs.edit.form = {
          id: item.id,
          aName: item.animalName,
          aSex: item.animalType,
          aKind: item.aKind,
          aDetail: item.aDetail,
          aImage: item.aImage,
          aPhone: item.aPhone,
          category: {
            id: item.category.id.toString(),
            name: item.category.name
          }
        }
      }
    }
  }
</script>

<style scoped>
  .card {
    font-size: 13px;
    margin-bottom: 6px
  }

  .cover {
    width: 150px;
    height: 150px;
    border-radius: 50px;
    /* margin-bottom: 7px; */
    overflow: hidden;
    cursor: pointer;
  }

  img {
    width: 150px;
    height: 150px;
  }

  .big {
    width: 300px;
    height: 350px;
    /* border-radius:50px; */
    /*margin: 0 auto;*/
  }

  .title {
    font-size: 15px;
    text-align: left;
  }

  .author {
    color: #333;
    width: 102px;
    font-size: 13px;
    margin-bottom: 6px;
    text-align: left;
  }

  .abstract {
    display: block;
    line-height: 17px;
  }

  a {
    text-decoration: none;
  }

  a:link, a:visited, a:focus {
    color: #3377aa;
  }

  h3 {
    /* background-color: #3377aa; */
    margin-bottom: 15px;
  }

</style>
