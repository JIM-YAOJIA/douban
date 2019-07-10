<template>
  <div id="app">
    <router-view/>
    <tabl></tabl>
    
  </div>
</template>

<script>
import tabl from './components/table'
import {obj} from '../static/js/utils.js'

export default {
  // name: 'App',
  components:{
      tabl
  },
  mounted () {
   //在组件挂载的时候进行调用
    // obj.setRem();
  },
  beforeCreate:function(){
    this.$router.push('/');
  }


}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width:100%
}
</style>
