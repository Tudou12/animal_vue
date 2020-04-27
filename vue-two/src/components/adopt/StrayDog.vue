<template>
  <div class="body">
    <el-row style="height: 250px;">
      <el-tooltip effect="dark" placement="right"
                  v-for="item in dogs"
                  :key="item.id">
        <p slot="content" style="font-size: 20px;margin-bottom: 6px;">{{item.animalName}}</p>
        <p slot="content" style="font-size: 20px;margin-bottom: 6px">
          <span>{{item.animalNo}}</span> /
          <span>{{item.animalType}}</span>
        </p>
        <p slot="content" style="width: 300px" class="abstract">{{item.animalDetail}}</p>
        <el-card style="width: 135px;margin-bottom: 20px;height: 233px;float: left;margin-right: 15px;" class="dog"
                 bodyStyle="padding:10px" shadow="hover">
          <div class="cover" @click="AdoptDog(item)">
            <img :src="item.animalImage" alt="封面">
          </div>
          <div class="info">
            <div class="name">
              <a href="">姓名：{{item.animalName}}</a>
            </div>
          </div>
          <div class="type">品种：{{item.animalType}}</div>
        </el-card>
      </el-tooltip>
      <a href="./Cat.vue">
        <img src="../../assets/more.png"/>
      </a>
    </el-row>
  </div>
</template>
<script>
  export default {
    name: 'StrayDog',
    data() {
      return {
        dogs: [],
      }
    },
    mounted: function () {
      this.loadDogs()
    },
    methods: {
      loadDogs() {
        var _this = this
        this.$axios.get('/strays').then(resp => {
          if (resp && resp.status === 200) {
            _this.dogs = resp.data
          }
        })
      },
      deletedog(id) {
        this.$confirm('此操作将永久删除该动物信息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            this.$axios
              .post('/delete', {id: id}).then(resp => {
              if (resp && resp.status === 200) {
                this.loaddogs()
              }
            })
          }
        ).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
        // alert(id)
      },
      adoptDog(item) {
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
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .el-row {
    margin-bottom: 20px;
    /* &:last-child {
      margin-bottom: 0;
    } */
  }

  .cover {
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
    background-color: lightcyan;
  }
</style>

