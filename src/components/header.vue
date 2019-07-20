<template>
	<div class="inner-head">
		<div>
			
		</div>
		<div>
			<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
		 		 @select="handleSelect" background-color="#3b3a3a" text-color="#fff" font-weight="700" active-text-color="#ffd04b">
			  <el-menu-item :index="index+''" v-for="(menu,index) in menus">
			  		<router-link :to="menu.url">{{menu.name}}</router-link>
			  </el-menu-item>
			</el-menu>
		</div>
	</div>
</template>
<script>
export default{
	name:'header1',
	data(){
		 return{
		 	activeIndex: '0',
		 	menus:[
			 	{name:"首页",url:"/"},
			 	{name:"个人日记",url:"personLog"},
			 	// {name:"技术博文",url:"topic"},
			 	{name:"图片收藏",url:"picture"},
			 	{name:"程序资料",url:"technology"},
			 	{name:"视频",url:"vedio"},
			 	{name:"留言板",url:"message"},
			 	{name:"关于我",url:"aboutMe"}
			 ]
		 }
	},
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
	
</script>
<style scoped>

</style>