<template>
  <div class="list">
    <div class="title">
      <h1>活动管理</h1>
    </div>
    <div>
      <add-activity></add-activity>
      <el-table
        ref="multipleTable"
        :data="lists"
        border
        style="width: 100%"
        @selection-change="handleSelectionChange"
        :max-height="tableHeight"
      >
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          fixed
          prop="id"
          label="ID"
          width="150">
        </el-table-column>
        <el-table-column
          fixed
          prop="activityName"
          label="活动名"
          width="150">
        </el-table-column>
        <el-table-column
          prop="type"
          label="活动类型"
          width="100">
        </el-table-column>
        <el-table-column
          prop="address"
          label="活动地址"
          width="170">
        </el-table-column>
        <el-table-column
          prop="activityTime"
          label="活动时间"
          width="100">
        </el-table-column>
        <el-table-column
          prop="peopleNumber"
          label="人数"
          width="60">
        </el-table-column>
        <el-table-column
          prop="details"
          label="活动内容"
          width="300">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <i class="el-icon-delete" @click="deleteCat(lists.id)"></i>
          <el-button
            @click.native.prevent="deleteRow(scope.$index, lists)"
            type="text"
            size="small">
            移除
          </el-button>
        </el-table-column>
      </el-table>
      <div style="margin-top: 20px">
        <!-- <el-button @click="toggleSelection([tableData3[1], tableData3[2]])">切换第二、第三行的选中状态</el-button>
        <el-button @click="toggleSelection()">取消选择</el-button> -->
      </div>
      <!-- <eidt-form ref="eidt-form" v-on:search="searchForm"></eidt-form> -->
    </div>
  </div>
</template>

<script>
  import EditForm from './EditForm';
  import AddActivity from './AddActivity';

  export default {
    name: "ActivityManage",
    components: {
      // EditForm,
      AddActivity
    },
    data() {
      return {
        lists: [{
          // activityName:'1111',
          id: ''
        }],
      }
    },
    mounted() {
      this.loadLists()
    },
    computed: {
      tableHeight() {
        return window.innerHeight - 320
      }
    },
    methods: {
      deleteRow(index, rows) {//移除一行
        rows.splice(index, 1);//删掉该行
      },
      deleteCat(id) {
        this.$confirm('此操作将永久删除该动物信息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            this.$axios
              .post('/activitys/delete', {id: id}).then(resp => {
              if (resp && resp.status === 200) {
                this.loadCats()
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
      searchForm() {
        this.loadLists();
      },
      handleClick() {
        this.$refs.editForm.dialogFormVisible = true
        this.$refs.editForm.form = {
          id: item.id,
          activityName: item.activityName,
          type: item.type,
          address: item.address,
          applyTime: item.applyTime,
          activityTime: item.activityTime,
          releaseTime: item.releaseTime,
          details: item.details,
        }
      },
      editList(item) {
        this.$refs.editForm.dialogFormVisible = true
        this.$refs.editForm.form = {
          id: item.id,
          activityName: item.activityName,
          type: item.type,
          address: item.address,
          applyTime: item.applyTime,
          activityTime: item.activityTime,
          releaseTime: item.releaseTime,
          details: item.details,
          peopleNumber: item.peopleNumber,
          // conditional: item.conditional,
        }
      },
      loadLists() {
        var _this = this
        this.$axios.get('/activity/list').then(resp => {
          if (resp && resp.status === 200) {
            _this.lists = resp.data
          }
        })
      }
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
</script>

<style scoped>
  .step {
    margin-bottom: 15px;
  }

  .list {
    width: 900px;
    text-align: center;
    margin: auto;
  }

  li {
    text-align: left;
    list-style: none;
  }
</style>
