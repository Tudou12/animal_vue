<template>
  <div id="Home">
    <div id="body">
      <el-button type="text" @click="dialogFormVisible = true">
        <h2>我要发布</h2>
      </el-button>
      <el-dialog title="走失宠物信息表" :visible.sync="dialogFormVisible" @close="clear" style="text-align:center;font-size: 30px">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="50px" class="ruleForm">
          <el-form-item label="名字" prop="aName">
            <el-input v-model="ruleForm.aName"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="aSex">
            <el-radio-group v-model="ruleForm.aSex">
              <el-radio label="公"></el-radio>
              <el-radio label="母"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="品种" prop="aKind">
            <el-input v-model="ruleForm.aKind" placeholder="不清楚请填写“暂不清楚”"></el-input>
          </el-form-item>
          <el-form-item label="联系方式" prop="aPhone">
            <el-input v-model="ruleForm.aPhone" placeholder="请填写电话号码或微信号"></el-input>
          </el-form-item>
          <el-form-item label="时间" prop="aTime">
            <el-input v-model="ruleForm.aTime" placeholder="请以20XX-xx-xx的格式填写"></el-input>
          </el-form-item>
          <el-form-item label="封面图片" prop="aImage">
            <el-input v-model="ruleForm.aImage" autocomplete="off" placeholder="图片 URL"></el-input>
            <img-upload @onUpload="uploadImg" ref="imgUpload"></img-upload>
          </el-form-item>
          <el-form-item label="补充" prop="aDetail">
            <el-input type="textarea" :rows="2" v-model="ruleForm.aDetail"
                      placeholder="请补充详细信息，如特征，丢失或捡到地址等"></el-input>
          </el-form-item>
          <el-form-item label="分类"  prop="id">
            <el-select v-model="ruleForm.category.id" placeholder="请选择分类">
              <el-option label="犬类" value="1"></el-option>
              <el-option label="猫类" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="id" >
            <el-input type="hidden" v-model="ruleForm.id" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">发布</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  import ImgUpload from "../common/ImgUpload";

  export default {
    name: "ReleaseFrom",
    components: {ImgUpload},
    data() {
      return {
        // activeIndex2:'1',
        ruleForm: {
          id: "",
          aName: "",
          aSex: "",
          aId: "",
          aKind: "",
          aDetail: "",
          aPhone: "",
          // aTime: '',
          aImage: "",
          aTime: "",
          category: {
            id: "",
            name: ""
          }
        },
        rules: {
          aPhone: [
            {required: true, message: "请填写联系方式", trigger: "blur"}
          ],
          aDetail: [
            {required: true, message: "请填写详细信息", trigger: "blur"}
          ]
        },
        imgs: [
          {url: require("../../assets/image/4.jpg"), link: "/content1"},
          {url: require("../../assets/image/5.jpg"), link: "/content1"},
          {url: require("../../assets/image/8.jpg"), link: "/content1"},
          {url: require("../../assets/image/7.jpg"), link: "/content1"}
        ],
        dialogFormVisible: false
      };
    },
    methods: {
      clear() {
        this.$refs.imgUpload.clear();
        this.form = {
          id: "",
          aName: "",
          aSex: "",
          aId: "",
          aKind: "",
          aPhone: "",
          aDetail: "",
          aTime: "",
          aImage: "",
          category: ""
        };
      },
      submitForm(ruleForm) {
        this.$axios
          .post("/losts/add", {
            id: this.ruleForm.id,
            aName: this.ruleForm.aName,
            aSex: this.ruleForm.aSex,
            aId: this.ruleForm.aId,
            aKind: this.ruleForm.aKind,
            aPhone: this.ruleForm.aPhone,
            aDetail: this.ruleForm.aDetail,
            aTime: this.ruleForm.aTime,
            aImage: this.ruleForm.aImage,
            category: this.ruleForm.category
          })
          .then(resp => {
            if (resp && resp.status === 200) {
              alert("submit!");
              this.dialogFormVisible = false;
              this.$emit("submitForm");
            } else {
              console.log("error submit!!");
              alert("error submit!");
              return false;
            }
          });
      },
      resetForm(ruleForm) {
        this.$refs[ruleForm].resetFields();
      },
      uploadImg() {
        this.ruleForm.aImage = this.$refs.imgUpload.url;
        // this.ruleForm.cover = this.$refs.imgUpload.url
      }
    }
  };
</script>
<style scoped>

</style>
