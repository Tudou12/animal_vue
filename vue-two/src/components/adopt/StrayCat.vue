<template>
  <div class="body">
    <h1>领养专区</h1>
    <el-card class="box-card">
      <el-row class="car">
        <el-tooltip effect="dark" placement="right"
                    v-for="item in cats"
                    :key="item.id">
          <p slot="content"><img :src="item.animalImage" alt="封面" class="big"></p>
          <p slot="content" style="font-size: 14px;margin-bottom: 6px;">名字：{{item.animalName}}</p>
          <p slot="content" style="font-size: 13px;margin-bottom: 6px">动物编号：{{item.animalNo}}</p>
          <p slot="content" style="font-size: 13px;margin-bottom: 6px">动物类型：{{item.animalType}}</p>
          <p slot="content" style="width: 300px" class="abstract">动物详情:{{item.animalDetail}}</p>
          <el-card style="width: 210px;margin: 18px;height: 300px;float: left;" class="cat"
                   bodyStyle="padding:5px" shadow="hover">
            <div class="animalImage" @click="AdoptCat(item)">
              <img :src="item.animalImage" alt="封面">
            </div>
            <div class="info">
              <div class="name">
                <a href="">姓名：{{item.animalName}}</a>
              </div>
            </div>
            <div class="type">品种：{{item.animalType}}
              <Apply @onSubmit="loadCats()" ref="edit" class="apply"></Apply>
            </div>
          </el-card>
        </el-tooltip>
      </el-row>
    </el-card>
    <a href="Cat">
      <h3>更多</h3>
      <!-- <img src="../../assets/more.png" /> -->
    </a>
  </div>
</template>

<script>
  import Apply from "../adopt/Apply";

  export default {
    name: 'StrayCat',
    components: {Apply,},
    data() {
      return {
        cats: [],
      }
    },
    mounted: function () {
      this.loadCats()
    },
    methods: {
      loadCats() {
        var _this = this
        this.$axios.get('/strays').then(resp => {
          if (resp && resp.status === 200) {
            _this.cats = resp.data
          }
        })
      },
      adoptCat(item) {
        this.$refs.edit.dialogFormVisible = true
        this.$refs.edit.form = {
          id: item.id,
          animalName: item.animalName,
          animalType: item.animalType,
          animalNo: item.animalNo,
          animalDetail: item.animalDetail,
          animalImage: item.animalImage,
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
  .car {
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }

  img {
    width: 175px;
    height: 190px;
    margin-bottom: 7px;
    overflow: hidden;
    cursor: pointer;
  }

  .name {
    font-size: 14px;
    text-align: left;
  }

  .type {
    color: #333;
    width: 200px;
    font-size: 13px;
    margin-bottom: 6px;
    text-align: left;
  }

  .abstract {
    display: block;
    line-height: 17px;
  }

  .el-icon-delete {
    cursor: pointer;
    float: right;
  }

  .switch {
    display: flex;
    position: absolute;
    left: 780px;
    top: 25px;
  }

  a {
    text-decoration: none;
  }

  a:link, a:visited, a:focus {
    color: #3377aa;
  }

  .apply {
    float: right;
  }

  /* #body{
    background-color: khaki;
  } */
</style>

