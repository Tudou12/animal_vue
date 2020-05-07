<template>
  <div style="text-align: left">
    <el-button type="text"  @click="dialogFormVisible = true;" ></el-button>
    <el-dialog
      title="添加/修改志愿者活动"
      :visible.sync="dialogFormVisible"
      @close="clear">
      <el-form :model="form"  style="text-align: left" ref="form">
        <el-form-item label="活动名" :label-width="formLabelWidth" prop="activityName">
          <el-input v-model="form.activityName" autocomplete="off" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="活动类型" :label-width="formLabelWidth" prop="type">
          <el-input v-model="form.type" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动地址" :label-width="formLabelWidth" prop="address">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动发布时间" :label-width="formLabelWidth" prop="applyTime">
          <el-input v-model="form.applyTime" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动时间" :label-width="formLabelWidth" prop="activityTime">
          <el-input v-model="form.activityTime" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="报名结束时间" :label-width="formLabelWidth" prop="endTime">
          <el-input v-model="form.endTime" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="人数" :label-width="formLabelWidth" prop="peopleNumber">
          <el-input v-model="form.peopleNumber" autocomplete="off" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="活动内容" :label-width="formLabelWidth" prop="details">
          <el-input type="textarea" v-model="form.details" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="id" style="height: 0">
          <el-input type="hidden" v-model="form.id" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "EditForm",
    data() {
      return {
        dialogFormVisible: false,
        form: {
          id: '',
          activityName: '',
          type: '',
          address: '',
          applyTime: '',
          activityTime: '',
          endTime: '',
          details: '',
          peopleNumber: '',
        },
        formLabelWidth: '120px'
      }
    },
    methods: {
      clear() {
        this.form = {
          id: '',
          activityName: '',
          type: '',
          address: '',
          applyTime: '',
          activityTime: '',
          endTime: '',
          details: '',
          peopleNumber: '',
        }
      },
      onSubmit() {
        this.$axios
          .post('/activity/add', {
            id: this.form.id,
            activityName: this.form.activityName,
            type: this.form.type,
            address: this.form.address,
            applyTime: this.form.applyTime,
            activityTime: this.form.activityTime,
            endTime: this.form.endTime,
            details: this.form.details,
            peopleNumber: this.form.peopleNumber,
          }).then(resp => {
          if (resp && resp.status === 200) {
            this.dialogFormVisible = false;
            this.$message.success('修改成功');
            this.$emit('onSubmit')
          }
        })
      },
    }
  }
</script>

<style scoped>
  .add-button {
    margin: 18px 0 0 10px;
  }
</style>
