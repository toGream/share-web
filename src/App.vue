<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
export default {
  name: 'App',
  data(){
      return{
        
      }
  },
  components:{
    Header,
    Footer
  }
}
</script>

<style>
/**初始化样式**/
*{
  margin:0;
  padding:0;
}
/**设置body宽高和背景颜色**/
html,body{
  width:100%;
  height:100%;
  background:#ccc;
}
ul{list-style:none}
a{text-decoration: none;} 
img{vertical-align:top;border:none}
 
.clearf:after,
.clearf:before{
    content:"";
    display:block;
    clear:both;
}
#app {
  font-family: "Microsoft YaHei",'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:70%;
  height:100%;
  margin: auto;
  background-size: cover;
}
</style>
