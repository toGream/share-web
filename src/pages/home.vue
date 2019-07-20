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
						<router-link :to="{name:'/articleDetail', query:{articleId : title.articleId}}">{{title.title}}</router-link>
					</div>
				</div>
			</div>
		</div>
		<!--右侧:最新文章，评论-->
		<div id="main_right">
			<div class="right_hot">
				<div class="hot_content_item" v-for="content in hotContents">
					<ul class="hot_img">
						<li>
							<img :src="content.imgUrl">
						</li>
					</ul>
					<div class="hot_info">
						<div class="hot_link">
							<h3>
								<a href="#">{{content.hotTitle}}</a>
							</h3>
						</div>
						<div class="hot_desc">
							{{content.hotDesc}}
						</div>
						<div class="hot_time">
							<span>发布于{{content.hotTime}}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	name:'header1',
	data(){
		return{
			hotList:[
				{name:"最新随笔",
				titles:[
					{title:"怎样成为一个程序高手呢？",url:""},
					{title:"怎样成为一个程序高手呢？",url:""},
					{title:"怎样成为一个程序高手呢？",url:""},
					{title:"怎样成为一个程序高手呢？",url:""},
					{title:"怎样成为一个程序高手呢？",url:""},
				]},
				{name:"技术网站首页链接",
				titles:[
					{title:"北京尚学堂",url:""},
					{title:"北京尚学堂",url:""},
					{title:"北京尚学堂",url:""},
					{title:"北京尚学堂",url:""},
					{title:"北京尚学堂",url:""}
				]}
			],
			hotContents:[
				{imgUrl:require("../assets/images/1.jpg"), 
				hotTitle:"关于 EOS 的一点看法", 
				hotLink:"", 
				hotDesc:"现在一年的时间又快过去了，市场环境已经发生了许多的变化，我虽然也执有各种加密币，但总体风格偏向保守，基于以下原因，我不会大量加仓：1、EOS 是当前区块链项目中第二大中心化的项目（第一大是 RIPPLE)，并且自带增发通胀属性；2、EOS 代币没有经过充分换手，暂时没有生态应用支撑", 
				hotTime:"2018-10-10"},
				{imgUrl:require("../assets/images/2.jpg"), 
				hotTitle:"关于 EOS 的一点看法", 
				hotLink:"", 
				hotDesc:"现在一年的时间又快过去了，市场环境已经发生了许多的变化，我虽然也执有各种加密币，但总体风格偏向保守，基于以下原因，我不会大量加仓：1、EOS 是当前区块链项目中第二大中心化的项目（第一大是 RIPPLE)，并且自带增发通胀属性；2、EOS 代币没有经过充分换手，暂时没有生态应用支撑", 
				hotTime:"2018-10-10"},
				{imgUrl:require("../assets/images/3.jpg"),  
				hotTitle:"关于 EOS 的一点看法", 
				hotLink:"", 
				hotDesc:"现在一年的时间又快过去了，市场环境已经发生了许多的变化，我虽然也执有各种加密币，但总体风格偏向保守，基于以下原因，我不会大量加仓：1、EOS 是当前区块链项目中第二大中心化的项目（第一大是 RIPPLE)，并且自带增发通胀属性；2、EOS 代币没有经过充分换手，暂时没有生态应用支撑", 
				hotTime:"2018-10-10"},
				{imgUrl:require("../assets/images/4.jpg"), 
				hotTitle:"关于 EOS 的一点看法", 
				hotLink:"", 
				hotDesc:"现在一年的时间又快过去了，市场环境已经发生了许多的变化，我虽然也执有各种加密币，但总体风格偏向保守，基于以下原因，我不会大量加仓：1、EOS 是当前区块链项目中第二大中心化的项目（第一大是 RIPPLE)，并且自带增发通胀属性；2、EOS 代币没有经过充分换手，暂时没有生态应用支撑", 
				hotTime:"2018-10-10"},
				{imgUrl:require("../assets/images/5.jpg"), 
				hotTitle:"关于 EOS 的一点看法", 
				hotLink:"", 
				hotDesc:"现在一年的时间又快过去了，市场环境已经发生了许多的变化，我虽然也执有各种加密币，但总体风格偏向保守，基于以下原因，我不会大量加仓：1、EOS 是当前区块链项目中第二大中心化的项目（第一大是 RIPPLE)，并且自带增发通胀属性；2、EOS 代币没有经过充分换手，暂时没有生态应用支撑", 
				hotTime:"2018-10-10"},
			],
			classfications:[]
		}
	},
	created(){
		this.$http.get("http://localhost:8082/article/articles").then(res => {
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
}
.hot_content_item {
    border-bottom: 1px solid #ccc;
    width: 95%;
    padding: 0px;
    float: left;
}
.hot_img {
    float: left;
    width: 212px;
    height:126px;
    padding: 15px 0px 0px 0px;
    margin: 0px;
    list-style-type: none;
}
.hot_info {
    width: 70%;
    text-align: left;
    float: left;
    margin: 0px 0px 0px 10px;
}
</style>