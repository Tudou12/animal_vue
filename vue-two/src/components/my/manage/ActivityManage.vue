<template>
  <div class="list">
    <nav-menu></nav-menu>
    <div class="title">
      <h1>活动管理</h1>
    </div>
    <div class="activity">
    <edit-form @onSubmit="loadLsits()"  ref="edit"></edit-form>
      <el-card>
      <add-activity></add-activity>
      <el-button
        type="primary"
        icon="el-icon-delete"
        class="handle-del mr10"
        @click="delAllSelection"
      >批量删除</el-button>
      <el-table
        ref="multipleTable"
        :data="lists"
        border
        @selection-change="handleSelectionChange"
        :max-height="tableHeight"
        style="1000px"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="activityName" label="活动名" width="150"></el-table-column>
        <el-table-column prop="type" label="活动类型" width="100"></el-table-column>
        <el-table-column prop="address" label="活动地址" width="170"></el-table-column>
        <el-table-column prop="activityTime" label="活动举办时间" width="100"></el-table-column>
        <el-table-column prop="endTime" label="活动报名截止时间" width="100"></el-table-column>
        <el-table-column prop="peopleNumber" label="人数" width="60"></el-table-column>
        <el-table-column prop="details" label="活动内容" width="300"></el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <el-row>
            <el-col :span="8">
             <el-button
              @click.native.prevent="editList(scope.row)"
              icon="el-icon-edit"
              type="text"
              class="red">
              编辑
            </el-button>
              </el-col>
            <el-col :span="8"><el-button
              type="text"
              icon="el-icon-delete"
              class="red"
              @click="deleteActivity(scope.$index, scope.row)"
            >删除</el-button></el-col>
            </el-row>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
                <el-pagination
                    background
                    layout="total, prev, pager, next"
                    :current-page="query.pageIndex"
                    :page-size="query.pageSize"
                    :total="pageTotal"
                    @current-change="handlePageChange"
                ></el-pagination>
            </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import EditForm from "../../voluntary/EditForm";
import AddActivity from "../../voluntary/AddActivity";
import NavMenu from "../../common/NavMenu";

export default {
  name: "ActivityManage",
  components: { NavMenu,AddActivity, EditForm},
  data() {
    return {
      lists:[],
      multipleSelection: [],
      pageTotal: 0,
      delList:[],
      idx: -1,
      id: -1,
      query:{
        pageIndex: 1,
        pageSize: 10,
      }
    };
  },
  mounted() {
    this.loadLists();
  },
  computed: {
    // tableHeight() {
    //   return window.innerHeight - 320;
    // }
  },
  methods: {
    deleteActivity(index,row) {
      this.$confirm("此操作将永久删除该活动信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios.post("/activitys/delete", { id: row.id }).then(resp => {
            if (resp && resp.status === 200) {
              this.lists.splice(index, 1);
              this.loadLists();
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    delAllSelection() {
      const length = this.multipleSelection.length;
      let str = "";
      this.delList = this.delList.concat(this.multipleSelection);
      for (let i = 0; i < length; i++) {
        str += this.multipleSelection[i].name + " ";
      }
      this.$message.error(`删除了${str}`);
      this.multipleSelection = [];
    },
    searchForm() {
      this.loadLists();
    },
    editList(item) {
      this.$refs.edit.dialogFormVisible = true;
      this.$refs.edit.form = {
        id: item.id,
        activityName: item.activityName,
        type: item.type,
        address: item.address,
        applyTime: item.applyTime,
        activityTime: item.activityTime,
        endTime: item.endTime,
        peopleNumber:item.peopleNumber,
        details: item.details
      };
    },

    handleSelectionChange(val) {
    this.multipleSelection = val;
  },
    delAllSelection() {
      const length = this.multipleSelection.length;
      let str = "";
      this.delList = this.delList.concat(this.multipleSelection);
      for (let i = 0; i < length; i++) {
        str += this.multipleSelection[i].name + " ";
      }
      this.$message.error(`删除了${str}`);
      this.multipleSelection = [];
    },

    loadLists() {
      var _this = this;
      this.$axios.get("/activity/list").then(resp => {
        if (resp && resp.status === 200) {
          _this.lists = resp.data;
          this.pageTotal = res.pageTotal || 50;
        }
      });
    }
  },
};
</script>

<style scoped>
/* .step {
  margin-bottom: 15px;
} */
*{
  margin: 0px;
}
.list {
  /* width: 900px; */
  text-align: center;
  margin: auto;
  height: 100%;
  width: 100%;
    background-color: honeydew;
}
.activity{
  height: 1000px;
  width: 100%;
}
li {
  text-align: left;
  list-style: none;
}
</style>
