<template>

<div class="group">
    <Header bol='true' >
     
     <div slot="block" class="block">
           <input type="text" placeholder="影视 图书 唱片 小组等">
           <img src="../../static/img/Home/img/ic_group_search_small.png" alt="">
           <img src="../../static/img/Home/img/ic_scan_gray.png" alt="">
     </div>
     <img src="../../static/img/Home/img/ic_chat_white.png" alt="" slot="rightimg" class="rightimg">
</Header>

<Banner swiperid='go'>
      <div slot="swiper-con" class="swiper-slide">
            <img src="../../static/img/Home/img/01.jpg" alt="">

      </div>
      <div slot="swiper-con" class="swiper-slide">
            <img src="../../static/img/Home/img/02.jpg" alt="">

      </div>
      <div slot="swiper-con" class="swiper-slide">
            <img src="../../static/img/Home/img/03.jpg" alt="">

      </div>
</Banner>   
  <List v-for='(item,index) in arr' :key="index" :author='item.target.author.name' :url='item.target.author.avatar'>
			<span slot='title'>{{ item.title }}</span>
			<span slot='desc'>{{ item.target.desc }}</span>
		</List>
    
</div>
</template>
<script>
import Header from './header'
import Banner from '../../static/page/banner'
import List from './listitem'
export default {
      data () {
    return {
      val: true,
      arr:[]
    }},
    components:{
        Header,Banner,List
    },
    mounted(){
        this.fn()
    },
    methods:{
          fn(){
               
                this.$axios.get("../../static/data/homeData.json")
        .then(response => {
          console.log(response.data.recommend_feeds);
           var data = response.data.recommend_feeds;
           this.arr = data;
         }).catch(err => {
          console.log(err);
        });
      //   .catch(err => {
      //     console.log(err);
      //   });
          }
    }
}
</script>
<style >
.group{
      width:100%
}
    .block img{
          width:27px;
          position:absolute;
    }
    .block img:nth-of-type(1) {
          left:15px;
          top:17px
    } 
    .block img:nth-of-type(2) {
          right:76px;
          top:18px
    } 
</style>