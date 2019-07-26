<template>
	<div class="components-container">
		<div class="info">UE编辑器示例<br>需要使用编辑器时，调用UE公共组件即可。可设置填充内容defaultMsg，配置信息config(宽度和高度等)，可调用组件中获取内容的方法。<br>

			<el-input v-model="title" size="mini" placeholder="博客标题" style="width:240px;"></el-input>

			<el-select v-model="selectValue" size="mini" placeholder="请选择博客类别">
				<el-option v-for="item in classfications" :key="item.classId" :value="item.classId" :label="item.name">
				</el-option>
			</el-select>
		</div>

		 <el-button @click="getUEContent()" plain size="small" style="margin:5px 0 5px 0;">保存博客</el-button>
    	<div class="editor-container">
      		<UE :defaultMsg=defaultMsg :config=config ref="ue"></UE>
    	</div>
	</div>
</template>
<script>
import UE from '@/components/ue';
export default{
	components: {UE},
	name:'personLog',
	data(){
		return{
			defaultMsg: '',
	        config: {
	          initialFrameWidth: null,
	          initialFrameHeight: 550
	        },
	        title:"",
	        classfications:[],
	        selectValue:''
		}
	},
    methods: {
      getUEContent() {
        let content1 = this.$refs.ue.getUEContent();
        console.log(this.title)
        console.log(content1)
        console.log(this.selectValue)

        this.$http.post("http://zhongyiliang.cn:8082/article/save",{
        	title:this.title,
        	content:content1,
        	classId:this.selectValue
        }).then(res => {
			this.bannersData = res.data.banner;
			console.log('ok');
			this.$notify({
	          title: '获取成功，可在首页查看！',
	          message: content,
	          type: 'success'
	        });
		})
		.catch(error => {
			console.log(error);
			this.$notify({
	          title: '获取失败，请检查是否填写完整！',
	          message: '',
	          type: 'error'
	        });
		});
        // this.$notify({
        //   title: '获取成功，可在首页查看！',
        //   message: content,
        //   type: 'success'
        // });
        
      }
    },created(){
		this.$http.get("http://zhongyiliang.cn:8082/article/classfications").then(res => {
			this.classfications = res.data;
			console.log(this.classfications);
			console.log('ok');
		})
		.catch(error => {
			console.log(error);
		});
	}
}
</script>
<style scoped>
.info{
	border-radius: 5px;
	line-height: 20px;
	padding: 5px;
	margin: 5px;
	background-color: #ffffff;
 }
</style>