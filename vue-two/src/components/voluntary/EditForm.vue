<template>
  <div style="text-align: left">
    <el-button class="add-button" type="success" @click="dialogFormVisible = true">修改</el-button>
    <el-dialog
      title="添加/修改图书"
      :visible.sync="dialogFormVisible"
      :before-close="openDialog"
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
        <el-form-item label="活动时间" :label-width="formLabelWidth" prop="activityTime">
          <el-input v-model="form.activityTime" autocomplete="off"></el-input>
        </el-form-item>
        <!-- <el-form-item label="人数" :label-width="formLabelWidth" prop="peopleNumber">
          <el-input v-model="form.peopleNumber" autocomplete="off" placeholder=""></el-input>
        </el-form-item> -->
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
          releaseTime: '',
          details: '',
          peopleNumber: '',
          conditional: '',
        },
        formLabelWidth: '120px'
      }
    },
    // mounted(){
    //   this.loadLists();
    // },
    methods: {
      clear() {
        this.form = {
          id: '',
          activityName: '',
          type: '',
          address: '',
          applyTime: '',
          activityTime: '',
          releaseTime: '',
          details: '',
          // peopleNumber: '',
          // conditional: ''
        }
      },
      openDialog(flag) {
        this.displayAlter = flag;
        this.loadLists();
        this.$nextTick(() => {
          this.form.id = id;
          this.form.activityName = activityName;
          this.form.type = type;
          this.form.address = address;
          this.form.applyTime = applyTime;
          this.form.activityTime = activityTime;
          this.form.releaseTime = releaseTime;
          this.form.details = details;
        })
      },
      onSubmit() {
        this.$axios["form"]
          .post('/activity/add', {
            id: this.form.id,
            activityName: this.form.activityName,
            type: this.form.type,
            address: this.form.address,
            applyTime: this.form.applyTime,
            activityTime: this.form.activityTime,
            releaseTime: this.form.releaseTime,
            details: this.form.details,
            // peopleNumber: this.from.peopleNumber,
            // conditional: this.from.conditional,
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
