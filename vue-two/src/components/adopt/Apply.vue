<template>
  <div>
    <el-button type="primary" @click="dialogFormVisible = true" size="mini">申请领养</el-button>
    <el-dialog
      title="申请领养"
      :visible.sync="dialogFormVisible"
      @close="clear">
      <el-form v-model="form" style="text-align: left"
               ref="dataForm">
        <el-form-item label="名字" :label-width="formLabelWidth" prop="name">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄" :label-width="formLabelWidth" prop="age">
          <el-input v-model="form.age" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth" prop="sex">
          <el-select v-model="form.sex" placeholder="请选择分类">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="身份证" :label-width="formLabelWidth" prop="idCar">
          <el-input v-model="form.idCar" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="居住地址" :label-width="formLabelWidth" prop="adress">
          <el-input type="textarea" v-model="form.adress" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="居住地证明" :label-width="formLabelWidth" prop="adressImage">
          <el-input v-model="form.adressImage" autocomplete="off" placeholder="图片 URL"></el-input>
          <img-upload @onUpload="uploadImg" ref="imgUpload"></img-upload>
        </el-form-item>
        <el-form-item label="联系方式" :label-width="formLabelWidth" prop="phone">
          <el-input type="textarea" v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
        <!-- <el-form-item label="已领养动物数量" :label-width="formLabelWidth" prop="adopted">
          <el-input  v-model="form.adopted" autocomplete="off"></el-input>
        </el-form-item><el-form-item label="动物id" :label-width="formLabelWidth" prop="animalId">
          <el-input  v-model="form.animalId" autocomplete="off"></el-input>
        </el-form-item> -->
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
    name: 'Apply',
    components: {ImgUpload},
    data() {
      return {
        dialogFormVisible: false,
        form: {
          name: '',
          age: '',
          sex: '',
          idCar: '',
          adress: '',
          animalId: '',
          adopted: '1',
          adressImage: '',
          phone: ''
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
          name: '',
          age: '',
          sex: '',
          idCar: '',
          adress: '',
          animalId: '',
          adopted: '1',
          adressImage: '',
          phone: ''
        }
      },
      onSubmit() {
        this.$axios
          .post('/adopter/add', {
            name: this.form.name,
            age: this.form.age,
            sex: this.form.sex,
            idCar: this.form.idCar,
            adress: this.form.adress,
            animalId: this.form.id,
            adopted: this.form.adopted,
            adressImage: this.form.adressImage,
            phone: this.form.phone,
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
        this.form.animalImages = this.$refs.imgUpload.url;
        this.form.cover = this.$refs.imgUpload.url
      }
    }
  }
</script>

<style scoped>
  /* .button{
    width: 40px;
    height: 20px;
  } */
</style>
