

####################/**宽度自适应使用width:100%; 相对body自动居中:margin:0 auto; 高度自适应使用overflow:hidden**/######################
#container{
	width:100%;
	margin:0 auto;
	overflow: hidden;
}

####################网上很多说自己的VUE项目通过Webpack打包生成的list文件，放到HBulider打包后，通过手机打开一片空白。这个主要原因是路径的问题。########################
1、记得改一下config下面的index.js中bulid模块导出的路径。因为index.html里边的内容都是通过script标签引入的，而你的路径不对，打开肯定是空白的。先看一下默认的路径。
assetsPublicPath默认的是  ‘/’  也就是根目录。而我们的index.html和static在同一级目录下面。  所以要改为  ‘./ ’
2、另外还需要注意一点。src里边router/index.js路由配置里边默认模式是hash，如果你改成了history模式的话，打开也会是一片空白。所以改为hash或者直接把模式配置删除，让它默认的就行 。如果非要使用history模式的话，需要你在服务端加一个覆盖所有的情况的候选资源：如果URL匹配不到任何静态资源，则应该返回一个index.html,这个页面就是你app依赖页面。

