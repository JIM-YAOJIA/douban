<template>
<div class="item" @click="fn">
   <span v-show="bol"><slot name="activeimg" ></slot><br></span> 
   <span v-show="!bol"><slot name="normalimg" ></slot><br></span> 
   <span :class='{active:bol}'>{{txt}}</span>
</div>
</template>
<script>
 

export default {
    
    data:function(){
        return{
          
        }
    },
    props:['mark','sel','txt'],
    computed:{
       bol:function(){
           if(this.mark==this.sel){
               return true
           }
           return false;
       }
    },
    methods:{
      fn:function(){
          this.$router.push('/'+this.mark);
          this.$emit('change',this.mark)
      }
    }
}
</script>
<style >
   .item {
       width:20%;
       float:left;
        
   } 
   .item img{
       width:60%
   }
   .active{
       color:green
   }
</style>