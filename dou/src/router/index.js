import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Subject from '@/../static/page/subject'
import Status from  '@/../static/page/status'
import Profile from  '@/../static/page/profile'
import Group from '@/../static/page/group'
import Film from '../assets/film.vue'  
import Tv   from '../assets/tv.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/status',
      name: 'status',
      component: Status
    },
    {
      path:'/subject',
      name:'Subject',
      component:Subject,
      
      children:[
        {path:'',component:Film,name:'film'},
        {path:'film',component:Film,name:'film1'},
        {path:'tv',component:Tv,name:'tv'}
      ]
    },
    {
      path:'/group',
      component:Group
    },
    {path:'/profile',
    component:Profile

    }
  ]
})
