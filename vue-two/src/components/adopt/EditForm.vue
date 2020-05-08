<template>
  <div>
    <i @click="dialogFormVisible = true;"></i>
    <el-dialog
      title="修改可领养动物表"
      :visible.sync="dialogFormVisible"
      @close="clear">
      <el-form v-model="form" style="text-align: left" ref="dataForm">
        <el-form-item label="名字" :label-width="formLabelWidth" prop="animalName">
          <el-input v-model="form.animalName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="流浪动物品种" :label-width="formLabelWidth" prop="animalType">
          <el-input v-model="form.animalType" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="芯片号" :label-width="formLabelWidth" prop="animalNo">
          <el-input v-model="form.animalNo" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="详情" :label-width="formLabelWidth" prop="animalDetail">
          <el-input type="textarea" v-model="form.animalDetail" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="封面图片" :label-width="formLabelWidth" prop="animalImages">
          <el-input v-model="form.animalImages" autocomplete="off" placeholder="图片 URL"></el-input>
          <img-upload @onUpload="uploadImg" ref="imgUpload"></img-upload>
        </el-form-item>
        <el-form-item label="分类" :label-width="formLabelWidth" prop="id">
          <el-select v-model="form.category.id" placeholder="请选择分类">
            <el-option label="犬类" value="1"></el-option>
            <el-option label="猫类" value="2"></el-option>
          </el-select>
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
  import ImgUpload from '../common/ImgUpload'

  export default {
    name: 'EditForm',
    components: {ImgUpload},
    data() {
      return {
        dialogFormVisible: false,
        form: {
          id: '',
          animalName: '',
          animalType: '',
          animalNo: '',
          animalDetail: '',
          animalImages: '',
          category: {
            id: '',
            name: ''
          }
        },
        formLabelWidth: '120px',
        rules: {
          name: [
            {required: true, message: '请输入活动名称', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
          region: [
            {required: true, message: '请选择活动区域', trigger: 'change'}
          ],
          date1: [
            {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
          ],
          date2: [
            {type: 'date', required: true, message: '请选择时间', trigger: 'change'}
          ],
          type: [
            {type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change'}
          ],
          resource: [
            {required: true, message: '请选择活动资源', trigger: 'change'}
          ],
          desc: [
            {required: true, message: '请填写活动形式', trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      clear() {
        this.$refs.imgUpload.clear()
        this.form = {
          id: '',
          animalName: '',
          animalType: '',
          animalNo: '',
          animalDetail: '',
          animalImages: '',
          category: ''
        }
      },
      onSubmit() {
        this.$axios
          .post('/strays/add', {
            id: this.form.id,
            animalName: this.form.animalName,
            animalType: this.form.animalType,
            animalNo: this.form.animalNo,
            animalDetail: this.form.animalDetail,
            animalImages: this.form.animalImages,
            category: this.form.category
          }).then(resp => {
          if (resp && resp.status === 200) {
            alert('提交成功!');
            this.dialogFormVisible = false
            this.$emit('onSubmit')
          } else {
            console.log('提交失败!');
            return false;
          }
        })
      },

      uploadImg() {
        this.form.animalImages = this.$refs.imgUpload.url
      }
    }
  }
</script>

<style scoped>
  /* .el-icon-circle-plus-outline {
    margin: 50px 0 0 20px;
    font-size: 100px;
    float: left;
    cursor: pointer;
  } */
</style>
