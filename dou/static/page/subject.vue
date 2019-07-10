<template>

<div class="group">
    <Header >
    <span slot="title">书影音</span>
    <img src="../img/Audio/img/ic_actionbar_search_icon.png" alt="" slot="leftimg" class="leftimg">
    <img src="../img/Audio/img/ic_chat_green.png" alt="" slot="rightimg" class="rightimg">
</Header>
<div class="nav">
      <span :class='{active:index==0}' @click="index=0">
		 <router-link to= '/subject/film'>电影</router-link>  
		  
	  </span>
	  <span :class='{active:index==1}' @click="index=1">
	  		 <router-link to= '/subject/tv'>电视</router-link>  
	  		  
	  </span>
    
      
       
    
</div>

 <div>
    <router-view></router-view>
     </div>  
</div>
</template>
<script>
import Header from '../../src/components/header'
export default {
    components:{
        Header
    },
	data:function(){
		return{
			index:0
		}
	}
}
</script>
<style >
 /*   .child ul li{
      float:left;
      margin:20px;
      background:green;
      
      list-style:none
    }
    .child ul li a{
      text-decoration: none;
    } */
    .nav {
		height:30px;
		border-bottom: 1px solid #eee;
		line-height:30px;
		}
	a {
	  display:block;
		float:left;
		width:20%;
		color:#999;
		font-size:18px;
		  text-decoration:none;
		  text-align:center
	}
	.nav .active a{
		border-bottom:.04rem solid green;
		background:green;
		color:white
	}
	
</style>