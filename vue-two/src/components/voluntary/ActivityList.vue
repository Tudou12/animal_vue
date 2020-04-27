<template>
  <div class="list">
    <div class="title">
      <h1>活动申请</h1>
    </div>
    <h3 style="">如何报名</h3>
    <div class="step">
      <el-steps :active="4" align-center>
        <el-step title="步骤1" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="步骤2" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="步骤3" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="步骤4" description="这是一段很长很长很长的描述性文字"></el-step>
      </el-steps>
    </div>
    <div>
      <voluntary-from></voluntary-from>
      <el-table
        :data="lists"
        border
        style="width: 100%"
        :max-height="tableHeight">
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
          <template>
            <el-button
              @click="handleClick()"
              type="primary"
              size="small"
              icon="el-icon-edit">
              查看
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  import EditForm from './EditForm';
  import VoluntaryFrom from './VoluntaryFrom';

  export default {
    name: "ActivityList",
    components: {EditForm, VoluntaryFrom},
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
          // peopleNumber: item.peopleNumber,
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
