<template>
<div  class="header" :class='{green:bol}'>
    <slot name="title"></slot>
    <slot name="block"></slot>
    <slot name="leftimg"></slot> 
    <slot name="rightimg"></slot>
</div>
</template>
<script>
export default {
    props:{
        bol: {
				
				default: false
			}
    }
}
</script>
<style >
    .header{
        position:absolute;
        width:100%;
        height:60px;
        background:rgb(245,245,245);
        top:0;
        left:0;
        border-bottom:1px solid rgb(226,226,226);
        
    }
    .green{
        background:rgb(0 ,197 ,81)
    }
    .header span {
        text-align:center;
        line-height:60px;
        font-size:20px;
    }
    .header img{
        position:absolute
    }
    .header .leftimg{
         width:27px;
         right:70px;
         top:18px
    }
   .header .rightimg{
         width:27px;
         right:32px;
         top:18px
   }
   .header .block{
       height:50px;
       line-height:50px;
       position:relative
   }
   .header .block input{
        width:300px;
        height:30px;
        position:absolute;
        left:8px;
        top: 15px;
        border-radius:10px;
        border:none;
        text-indent:50px;
        font-size:18px
   }
</style>