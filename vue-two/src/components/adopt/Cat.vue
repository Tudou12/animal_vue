<template>
  <div>
    <router-view/>
    <nav-menu></nav-menu>
    <div class="body">
        <el-card>
         <a href="Adopt">返回领养首页</a>
        </el-card>
        <el-card >
        <el-row style="height: 840px;">
          <el-tooltip
            effect="dark"
            placement="right"
            v-for="item in cats.slice((currentPage-1)*pagesize,currentPage*pagesize)"
            :key="item.id"
          >
            <p slot="content" style="font-size: 14px;margin-bottom: 6px;">名字：{{item.animalName}}</p>
            <p slot="content" style="font-size: 13px;margin-bottom: 6px">动物编号：{{item.animalNo}}</p>
            <p slot="content" style="font-size: 13px;margin-bottom: 6px">动物类型：{{item.animalType}}</p>
            <p slot="content" style="width: 300px" class="abstract">动物详情:{{item.animalDetail}}</p>
            <el-card
              style="width: 200px;margin: 18px;height: 300px;float: left;"
              class="cat"
              bodyStyle="padding:5px"
              shadow="hover"
            >
              <div class="animalImage" @click="AdoptCat(item)">
                <img :src="item.animalImage" alt="封面"/>
              </div>
              <div class="info">
                <div class="name">
                  <a href>动物名字：{{item.animalName}}</a>
                </div>
              </div>
              <div class="type">
                动物品种：{{item.animalType}}
              <Apply @onSubmit="loadCats()" ref="edit" class="apply"></Apply>
              </div>
            </el-card>
          </el-tooltip>
        </el-row>
      </el-card>
    </div>
  </div>
</template>
<script>
  import NavMenu from "../common/NavMenu";
  import Apply from "../adopt/Apply";

  export default {
    name: "Cat",
    components: {NavMenu,Apply},
    data() {
      return {
        cats: [],
        currentPage: 1,
        pagesize: 17
      };
    },
    mounted: function () {
      this.loadCats();
    },
    methods: {
      loadCats() {
        var _this = this;
        this.$axios.get("/strays/list").then(resp => {
          if (resp && resp.status === 200) {
            _this.cats = resp.data;
          }
        });
      },
      adoptCat(item) {
        this.$refs.edit.dialogFormVisible = true;
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
        };
      }
    }
  };
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
    width: 175px;
    height: 190px;
    /*margin: 0 auto;*/
  }

  .name {
    font-size: 14px;
    text-align: left;
  }

  .type {
    color: #333;
    width: 150px;
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

  .edit {
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

  a:link,
  a:visited,
  a:focus {
    color: #3377aa;
  }

  .body {
    /* background-color: khaki; */
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
    /* margin: 5px; */
  }
</style>
