import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/layout/HomePage/HomePage.vue'
import Login from '@/layout/Login/Login.vue'
var routes = [
  {
    path: '/',
    component: HomePage,
    children:[
      {path:"",name:"default",component:{template:"<div>one</div>"}},
      {path:"one",name:"one",component:{template:"<div>one</div>"}},
      {path:"tow",name:"tow",component:{template:"<div>tow</div>"}},
      {path:"three",name:"three",component:{template:"<div>three</div>"}},
      {path:"four",name:"four",component:{template:"<div>four</div>"}},
    ]
  },
  { path:"/login",name:"Login",component:Login }
]
Vue.use(Router)
var exportRouter = new Router({
  routes: routes
});
export default exportRouter;

