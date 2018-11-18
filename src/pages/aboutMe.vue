<template>
	<div>
		<div id="inner-content">
            <div class="container">
                <div class="course">
                    <div class="list-row">
                        <div class="col-lg-12">
                            <div>
                                <h3>如果您有针对本站的任何意见、建议、错误报告，或者针对我的合作交流，请与我及时联系。</h3>
                                <br>
                                <p class="clear spacer_responsive_hide_mobile">
                                    为了防止垃圾邮件的骚扰，烦请使用此网页中的邮件发送表单给我发送邮件。邮件将直达我的服务器，不必中转。
                                </p>

                                <div class="contact">
                                    <el-form ref="form" :rules="rules" :model="form" label-width="80px">
                                        <el-form-item label="类型" prop="type" size="small">
                                        <el-select v-model="form.type" placeholder="请选择">
                                          <el-option label="一般交流" value="0"></el-option>
                                          <el-option label="技术交流" value="1"></el-option>
                                          <el-option label="广告投放" value="2"></el-option>
                                          <el-option label="链接交换" value="3"></el-option>
                                          <el-option label="网站意见，错误报告" value="4"></el-option>
                                        </el-select>
                                      </el-form-item>
                                      <el-form-item label="标题" prop="title" size="small">
                                        <el-input v-model="form.title" placeholder="请输入标题" clearable></el-input>
                                      </el-form-item>
                                      <el-form-item label="联系姓名" prop="contactName" size="small">
                                        <el-input v-model="form.contactName"  placeholder="请输入联系姓名" clearable></el-input>
                                      </el-form-item>
                                      <el-form-item label="邮箱" prop="emailAddress" size="small">
                                        <el-input v-model="form.emailAddress"  placeholder="请输入邮箱" clearable></el-input>
                                      </el-form-item>
                                      <el-form-item label="正文" prop="desc">
                                        <el-input type="textarea" v-model="form.desc"  placeholder="请输入正文" rows="5"></el-input>
                                      </el-form-item>
                                      <el-form-item>
                                        <el-button type="primary" @click="submitForm('form')">提交问题</el-button>
                                        <el-button @click="resetForm('form')">重置</el-button>
                                      </el-form-item>
                                    </el-form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
	</div>
</template>
<script>
export default{
	name:'aboutMe',
	data(){
		return{
			form: {
              title: '',
              type: '',
              contactName:'',
              emailAddress: '',
              desc: ''
            },
            rules: {
              title: [
                { required: true, message: '请输入标题', trigger: 'blur' },
                { min: 3, max: 30, message: '长度在 3 到 10 个字符', trigger: 'blur' }
              ],
              type: [
                {required: true, message: '请至少选择一种类型', trigger: 'change' }
              ],
              contactName: [
                { required: true, message: '请输入联系姓名', trigger: 'blur' },
                { min: 3, max: 30, message: '长度在 3 到 10 个字符', trigger: 'blur' }
              ],
              emailAddress: [
                { required: true, message: '请输入邮箱', trigger: 'blur' },
                { min: 3, max: 30, message: '长度在 3 到 10 个字符', trigger: 'blur' }
              ],
              desc: [
                { required: true, message: '请填正文', trigger: 'blur' }
              ]
            }
		}
	},
    methods: {
       submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>
<style scoped>
#inner-headline{
	background: #14A085;
    position: relative;
    margin: 0;
    padding: 0;
    color: #ccc;
    border-top: 10px solid #11967C;
}
.container{
	padding: 0 20px 0 20px;
    position: relative;
    width: 1170px;
    margin-right: auto;
    margin-left: auto;

}
.list-row{
	margin-bottom: 30px;
	margin-left: -15px;
    margin-right: -15px;
    display: inline-block;
}
.col-lg-12 {
    width: 100%;
    position: relative;
    padding-left: 15px;
    padding-right: 15px;
}
.pageTitle {
    color: #fff;
    margin: 30px 0 3px;
}
.div{
	display: block;
}
h1, h2, h3, h4, h5, h6 {
    font-family: 'Open Sans', Arial, sans-serif;
    font-weight: 700;
    line-height: 1.1em;
    color: #333;
    margin: 20px 0 0 10px;
}
h2{
    font-size: 30px;
}
h2 {
    -webkit-margin-before: 0.83em;
    -webkit-margin-after: 0.83em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
}
#inner-content {
    position: relative;
    background: #fff;
    padding: 50px 0 0px 0;
    width: 100%;
}
.col-lg-12 {
    width: 100%;
    position: relative;
    padding-left: 15px;
    padding-right: 15px;
}
.clear{
    clear: both;
}
.spacer_responsive_hide_mobile{
    height: 13px;
    display: block;
}
p{
    margin-left:10px;
}
.contact{
    margin-top:25px;
    display:block;
    padding:10px;
}	
</style>