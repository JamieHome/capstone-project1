import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/layout/HomePage/HomePage.vue'
import Login from '@/layout/Login/Login.vue'
import FirstPage from '@/components/FirstPage/FirstPage.vue'
import SecondPage from '@/components/SecondPage/SecondPage.vue'
import FivePage from '@/components/FivePage/FivePage.vue'
import ThirdPage from '@/components/ThirdPage/ThirdPage.vue'
import Fourpage from '@/components/Fourpage/Fourpage.vue'
import SixPage from '@/components/SixPage/SixPage.vue'




// debugger
var routes = [
  {
    path: '/',
    component: HomePage,
    children:[
      {path:"",name:"default",component:FirstPage},
      {path:"one",name:"one",component:FirstPage},
      {path:"tow",name:"tow",component:SecondPage},
      {path:"three",name:"three",component:ThirdPage},
      {path:"four",name:"four",component:Fourpage},
      {path:"five",name:"five",component:FivePage},
      {path:"six",name:"six",component:SixPage}
    ]
  },
  { path:"/login",name:"Login",component:Login }
]
Vue.use(Router)
var exportRouter = new Router({
  routes: routes
});
export default exportRouter;

