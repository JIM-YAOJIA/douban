<template>
<div class="table">
 
    
    <Item mark="" @change='val' :sel="select" txt="首页">
     <img src="../../static/img 2/ic_tab_home_normal.png" alt="" slot="normalimg">
     <img src="../../static/img 2/ic_tab_home_active.png" alt="" slot="activeimg">
    </Item>
    <Item mark="subject" @change='val' :sel="select" txt="书影音" >
     <img src="../../static/img 2/ic_tab_subject_normal.png" slot="normalimg" alt="">
     <img src="../../static/img 2/ic_tab_subject_active.png" alt="" slot="activeimg">
 </Item >
    <Item mark='status'@change='val' :sel="select" txt="广播">
     <img src="../../static/img 2/ic_tab_status_normal.png" slot="normalimg" alt="">
     <img src="../../static/img 2/ic_tab_status_active.png" alt="" slot="activeimg">
 </Item>
    <Item mark="group"@change='val' :sel="select" txt="小组">
     <img src="../../static/img 2/ic_tab_group_normal.png" slot="normalimg" alt="">
     <img src="../../static/img 2/ic_tab_group_active.png" alt="" slot="activeimg">
     </Item >
    <Item mark="profile" @change='val' :sel="select" txt="我的"><img src="../../static/img 2/ic_tab_profile_normal.png" slot="normalimg" alt="">
    <img src="../../static/img 2/ic_tab_profile_active.png" alt="" slot="activeimg">
 </Item> 
 

  
   
 
 
 
 
</div>
</template>
<script>
// import '../../static/jquery.min.js'
// import '../../static/bootstrap.min.js'
import Item from './item'

export default {
     
    components:{
        Item
    },
    data:function(){
        return{
          select:''
        }
    },
    methods:{
        val:function(va){
            this.select=va
        }
    }
}
</script>
<style >
  /* @import "../../static/bootstrap.min.css"  */
    
       .table{
           position:fixed;
           bottom:0
       }
  
</style>