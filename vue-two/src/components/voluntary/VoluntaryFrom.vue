<template>
  <div id="Home">
    <div id="body">
     <el-dialog title="志愿者申请表"
                 :visible.sync="dialogFormVisible"
                 @close="handleClose"
      >
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="ruleForm">
          <el-form-item label="姓名" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="年龄" prop="age">
            <el-input v-model="ruleForm.age"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="sex">
            <el-radio-group v-model="ruleForm.sex">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="活动名字" prop="activityName">
            <el-input v-model="ruleForm.activityName" placeholder="请填写你报名活动的活动名称"></el-input>
          </el-form-item>
          <el-form-item label="活动类型" prop="type">
            <el-input v-model="ruleForm.type" placeholder="请填写活动类型"></el-input>
          </el-form-item>
          <!-- <el-form-item label="活动时间" prop="activityTime">
            <el-input v-model="ruleForm.activityTime" placeholder="请选择活动时间以2020-xx-xx的格式">
            </el-input> -->
          </el-form-item>
          <el-form-item label="联系方式" prop="phone">
            <el-input v-model="ruleForm.phone"></el-input>
          </el-form-item>
          <el-form-item label="报名原因" prop="details">
            <el-input type="textarea" v-model="ruleForm.details"></el-input>
          </el-form-item>
          <el-form-item prop="id" style="height: 0">
            <el-input type="hidden" v-model="ruleForm.id" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="submitForm('ruleForm')">申请</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VoluntaryFrom',
    data() {
      return {
        // activeIndex2:'1',
        ruleForm: {
          id: '',
          name: '',
          age: '',
          sex: '',
          type: '',
          // activityTime: '',
          details: '',
          phone: '',
          activityName: '',
        },
        rules: {
          name: [
            {required: true, message: '姓名', trigger: 'blur'},
            {min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur'}
          ],
          age: [
            {required: true, message: '年龄', trigger: 'age'}
          ],
          sex: [
            {sex: 'array', required: true, message: '请选择', trigger: 'change'}
          ],
          contact: [
            {required: true, message: '请填写联系方式', trigger: 'blur'}
          ],
          details: [
            {required: true, message: '请填写详细的原因', trigger: 'blur'}
          ]
        },
        imgs: [
          {url: require('../../assets/image/4.jpg'), link: '/content1'},
          {url: require('../../assets/image/5.jpg'), link: '/content1'},
          {url: require('../../assets/image/8.jpg'), link: '/content1'},
          {url: require('../../assets/image/7.jpg'), link: '/content1'},
        ],
        dialogFormVisible: true,
      }
    },
    methods: {
      handleClose() {
        this.dialogFormVisible = false
        this.$emit('close', false)
      },
      submitForm(ruleForm) {
        this.$axios
          .post('/voluntary/add', {
            id: this.ruleForm.id,
            name: this.ruleForm.name,
            age: this.ruleForm.age,
            sex: this.ruleForm.sex,
            type: this.ruleForm.type,
            // activityTime: this.ruleForm.activityTime,
            desc: this.ruleForm.desc,
            phone: this.ruleForm.phone,

          }).then(resp => {
          if (resp && resp.status === 200) {
            alert('submit!');
            this.dialogFormVisible = false
            this.$emit('submitForm')
          } else {
            console.log('error submit!!');
            return false;
          }
        })
      },
      resetForm(ruleForm) {
        this.$refs[ruleForm].resetFields();
      },
    }
  }
</script>
<style scoped>
</style>
