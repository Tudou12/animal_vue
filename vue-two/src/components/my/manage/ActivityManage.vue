<template>
  <div class="list">
    <nav-menu></nav-menu>
    <div class="title">
      <h1>活动管理</h1>
    </div>
    <div class="activity">
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
        style="width: 100%"
        @selection-change="handleSelectionChange"
        :max-height="tableHeight"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column fixed prop="id" label="ID" width="150"></el-table-column>
        <el-table-column fixed prop="activityName" label="活动名" width="150"></el-table-column>
        <el-table-column prop="type" label="活动类型" width="100"></el-table-column>
        <el-table-column prop="address" label="活动地址" width="170"></el-table-column>
        <el-table-column prop="activityTime" label="活动时间" width="100"></el-table-column>
        <el-table-column prop="peopleNumber" label="人数" width="60"></el-table-column>
        <el-table-column prop="details" label="活动内容" width="300"></el-table-column>
        <el-table-column label="操作" width="180" align="center">
          <template slot-scope="scope">
            <el-button
              type="text"
              icon="el-icon-edit"
              @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button>
            <el-button
              type="text"
              icon="el-icon-delete"
              class="red"
              @click="deleteActivity(lists.id)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
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
      lists: [
        {
          // activityName:'1111',
          id: ''
        }
      ]
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
    deleteRow(index, rows) {
      //移除一行
      rows.splice(index, 1); //删掉该行
    },
    deleteActivity(id) {
      this.$confirm("此操作将永久删除该活动信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios.post("/activitys/delete", { id: id }).then(resp => {
            if (resp && resp.status === 200) {
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
      // alert(id)
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
    handleClick() {
      this.$refs.editForm.dialogFormVisible = true;
      this.$refs.editForm.form = {
        id: item.id,
        activityName: item.activityName,
        type: item.type,
        address: item.address,
        applyTime: item.applyTime,
        activityTime: item.activityTime,
        releaseTime: item.releaseTime,
        details: item.details
      };
    },
    editList(item) {
      this.$refs.editForm.dialogFormVisible = true;
      this.$refs.editForm.form = {
        id: item.id,
        activityName: item.activityName,
        type: item.type,
        address: item.address,
        applyTime: item.applyTime,
        activityTime: item.activityTime,
        releaseTime: item.releaseTime,
        details: item.details,
        peopleNumber: item.peopleNumber
        // conditional: item.conditional,
      };
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
    // 编辑操作
    handleEdit(index, row) {
      this.$refs.editForm.dialogFormVisible = true;
      this.$refs.editForm.form = {
        id: item.id,
        activityName: item.activityName,
        type: item.type,
        address: item.address,
        applyTime: item.applyTime,
        activityTime: item.activityTime,
        releaseTime: item.releaseTime,
        details: item.details,
        peopleNumber: item.peopleNumber
      }
    },
    loadLists() {
      var _this = this;
      this.$axios.get("/activity/list").then(resp => {
        if (resp && resp.status === 200) {
          _this.lists = resp.data;
        }
      });
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
