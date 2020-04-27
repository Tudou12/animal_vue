<template>
  <div>
    <router-view/>
    <nav-menu></nav-menu>
    <a href="Adopt">返回领养首页</a>
    <div class="body">
      <el-row style="height: 840px;">
        <el-tooltip effect="dark" placement="right"
                    v-for="item in cats.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                    :key="item.ID">
          <p slot="content" style="font-size: 14px;margin-bottom: 6px;">名字：{{item.animalName}}</p>
          <p slot="content" style="font-size: 13px;margin-bottom: 6px">动物编号：{{item.animalNo}}</p>
          <p slot="content" style="font-size: 13px;margin-bottom: 6px">动物类型：{{item.animalType}}</p>
          <p slot="content" style="width: 300px" class="abstract">动物详情:{{item.animalDetail}}</p>
          <el-card style="width: 135px;margin-bottom: 20px;height: 233px;float: left;margin-right: 15px" class="cat"
                   bodyStyle="padding:10px" shadow="hover">
            <div class="image">
              <img :src="item.image" alt="封面">
            </div>
            <div class="info">
              <div class="name">
                <a href="">动物名字：{{item.animalName}}</a>
              </div>
              <!-- <i class="el-icon-delete" @click="deleteCat(item.id)"></i> -->
            </div>
            <div class="type">动物品种：{{item.animalType}}</div>
          </el-card>
        </el-tooltip>
        <adopt-form @onSubmit="loadCats()" ref="edit"></adopt-form>
      </el-row>
      <el-row>
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pagesize"
          :total="cats.length">
        </el-pagination>
      </el-row>
    </div>
  </div>
</template>
<script>
  import AdoptForm from "../adopt/AddForm";
  import NavMenu from "../common/NavMenu";

  export default {
    name: 'Cat',
    components: {AdoptForm, NavMenu},
    data() {
      return {
        cats: [],
        currentPage: 1,
        pagesize: 17
      }
    },
    mounted: function () {
      this.loadCats()
    },
    methods: {
      loadCats() {
        var _this = this
        this.$axios.get('category/2/strays').then(resp => {
          if (resp && resp.status === 200) {
            _this.cats = resp.data
          }
        })
      },
      handleCurrentChange: function (currentPage) {
        this.currentPage = currentPage
        console.log(this.currentPage)
      },
      searchResult() {
        var _this = this
        this.$axios
          .get('/search?keywords=' + this.$refs.searchBar.keywords, {}).then(resp => {
          if (resp && resp.status === 200) {
            _this.cats = resp.data
          }
        })
      },
      // deleteCat (id) {
      //   this.$confirm('此操作将永久删除该动物信息, 是否继续?', '提示', {
      //     confirmButtonText: '确定',
      //     cancelButtonText: '取消',
      //     type: 'warning'
      //   }).then(() => {
      //       this.$axios
      //         .post('/delete', {id: id}).then(resp => {
      //         if (resp && resp.status === 200) {
      //           this.loadCats()
      //         }
      //       })
      //     }
      //   ).catch(() => {
      //     this.$message({
      //       type: 'info',
      //       message: '已取消删除'
      //     })
      //   })
      //   // alert(id)
      // },
      adoptCat(item) {
        this.$refs.edit.dialogFormVisible = true
        this.$refs.edit.form = {
          Id: item.ID,
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
  .image {
    width: 115px;
    height: 172px;
    margin-bottom: 7px;
    overflow: hidden;
    cursor: pointer;
  }

  img {
    width: 115px;
    height: 172px;
    /*margin: 0 auto;*/
  }

  .name {
    font-size: 14px;
    text-align: left;
  }

  .type {
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

  .body {
    background-color: khaki;
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }
</style>

