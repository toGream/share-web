<template>
	<div id="container">
		<!--左侧-->
		<div id="main_left">
			<div class="left_hot" v-for="hot in classfications">
				<div class="hot_title">
					<h3>{{hot.name}}</h3>
				</div>
				<div class="hot_best">
					<div class="hot_best_item" v-for="title in hot.articles">
						<router-link :to="{name:'/articleDetail', query:{articleId : title.articleId}}"
						target="_blank">{{title.title}}</router-link>
					</div>
				</div>
			</div>
		</div>
		<!--右侧:最新文章，评论-->
		<div id="main_right">
			<el-breadcrumb separator="/">
			  <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
			  <el-breadcrumb-item><a href="#">博客详情</a></el-breadcrumb-item/>
			</el-breadcrumb>

			<div class="right_hot" v-html="detail.content">
			</div>
		</div>
	</div>
</template>
<script>
export default{
	name:'articleDetail',
	data(){
		return{
			detail:'',
			classfications:[],
			articleId: 0
		}
	},
	created(){
		this.articleId = this.$route.query.articleId;//获取路径参数
		this.$http.get("http://zhongyiliang.cn:8082/article/detail/"+ this.articleId).then(res => {
			this.detail = res.data;
		})
		.catch(error => {
			console.log(error);
		});

		this.$http.get("http://zhongyiliang.cn:8082/article/articles").then(res => {
			this.classfications = res.data;
		})
		.catch(error => {
			console.log(error);
		});
	}
}
</script>
<style scoped>
#container{
	background-color: #fff;
	width:100%;
	overflow: hidden;
}	
#main_left{
	width:30%;
	float:left;
	border-right: #ddd 1px solid;
}
.left_hot {
    border-bottom: 1px #ddd solid;
    padding: 0px;
    font-size: 14px;
    line-height: 25px;
    background-color: #fefefe;
    text-align: left;
}
.hot_title {
    background: #f0f0f0;
}
.hot_title h3{
	margin-left:15px;
}
.hot_best {
	background: #fff;
}
.hot_best_item {
    height: 25px;
    line-height: 25px;
    overflow: hidden;
    margin: 4px 20px;
}
#main_right{
	width:69%;
	float:right;
}
.right_hot {
    padding: 0px;
    font-size: 14px;
    line-height: 25px;
    border-bottom: 1px #fff solid;
    margin:15px 0 0 0;
}

</style>