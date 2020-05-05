<template>
  <div>
    <router-view/>
    <nav-menu></nav-menu>
    <a href="Adopt" style="float:left;color:black">返回领养首页</a>
    <div class="list">
      <div class="title">
        <h1>我的申请</h1>
      </div>
      <h3 style="">申请流程</h3>
      <div class="step">
        <el-steps :active="3" align-center>
          <el-step title="步骤1" description="申请成功后可以点击记录查看是否成功申请"></el-step>
          <el-step title="步骤2" description="申请成功后工作人员会审核申请信息，通过您留下的方式与您联系"></el-step>
          <el-step title="步骤3" description="领养成功后记得工作人员会要定期上门回访哦"></el-step>
        </el-steps>
      </div>
      <edit-form @onSubmit="loadLists()" ref="edit"></edit-form>
      <el-table
        :data="lists"
        border
        style="width: 100%"
        :max-height="tableHeight">
        <!-- <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline>
          <el-form-item>
            <span>{{ props.row.details }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column> -->
        <el-table-column
          fixed
          prop="name"
          label="姓名"
          width="150">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="电话"
          width="100">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="170">
        </el-table-column>
        <!-- <el-table-column
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
        </el-table-column> -->
      </el-table>
      <!-- <eidt-from ref="eidtFrom" v-on:search="searchForm"></eidt-from> -->
    </div>
  </div>
</template>

<script>
  import EditForm from '../adopt/EditForm';
  import NavMenu from "../common/NavMenu";

  export default {
    name: "ApplyList",
    components: {EditForm, NavMenu},
    data() {
      return {
        lists: [{
          // activityName:'1111',
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
      searchForm() {
        this.loadLists();
      },
      // handleClick(row) {
      //   console.log(row);
      // },
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
          // peopleNumber: item.peopleNumber,
          // conditional: item.conditional,
        }
      },
      loadLists() {
        var _this = this
        this.$axios.get('/adopter').then(resp => {
          if (resp && resp.status === 200) {
            _this.lists = resp.data
          }
        })
      }
    }
  }
</script>

<style scoped>
  .step {
    margin-bottom: 15px;
  }

  .list {
    width: 1000px;
    text-align: center;
    margin: auto;
  }

  li {
    text-align: left;
    list-style: none;
  }
</style>
