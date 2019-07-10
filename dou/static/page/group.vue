<template>

<div class="group">
    <Header >
    <span slot="title" class="text">小组</span>
    <img src="../img/Audio/img/ic_actionbar_search_icon.png" alt="" slot="leftimg" class="leftimg">
    <img src="../img/Audio/img/ic_chat_green.png" alt="" slot="rightimg" class="rightimg">
</Header>
  <div v-for='item of arr' class="bo">
    <h3>{{item.title}}</h3>  
      <div v-for='img in item.group_list' class="chi">
       <img :src="'https://images.weserv.nl/?url='+img.img_url" width="50" height="50"/>    
       <span>{{img.group_name}}</span>   
       <span>{{img.group_member}}</span><br>
       <span>{{img.topic_title}}</span>
          
     </div>
     <span>更多相关小组</span> 
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
    return{arr:[],
    
    
    
    }
    },
     mounted(){
        this.fn()
    },
    methods:{
          fn(){
               
                this.$axios.get("../../static/data/groupData.json")
        .then(response => {
          console.log(response.data.group);
           var data = response.data.group;
           this.arr = data;
         }).catch(err => {
          console.log(err);
        });
        }}
}
</script>
<style >
.bo{
    margin:20px 0
}
.chi{
    text-align:left;
    margin:20px 0;
    position:relative
}
    .chi img{
        vertical-align:middle;
        margin-right:0.5rem;
        margin-left:0.5rem
        /* position:absolute;  
        left:10px */
    }
    .chi span:nth-of-type(3){
        margin-top:1rem;
        font-size:0.6rem;
        color:gray;
        border-bottom:1px gainsboro solid;
    }
    .bo>span{
        color:#42BD56
    }
    .chi span:nth-of-type(2){
        color:gainsboro;
         position:absolute;
         right:0.5rem;
         top:9px
    }
    .bo h3{
        text-align:left
    }
</style>