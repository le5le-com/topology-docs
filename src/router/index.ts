import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path:'/',
    name:'Index',
    component:()=>
      import(/* webpackChunkName: "index" */ '../views/Index.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect:'/topology',
    children: [
      {
        path:'/topology',
        name:'Topology',
        component:() => 
          import(/* webpackChunkName: "Topology" */ '../views/Topology.vue')
      },{
        path:'/install',
        name:'Install',
        component:() => 
          import(/* webpackChunkName: "Install" */ '../views/apis/Install.vue')
      },{
        path:'/careful',
        name:'Careful',
        component:() => 
          import(/* webpackChunkName: "Careful" */ '../views/apis/Careful.vue')
    },{
        path:'/quickstart',
        name:'Quickstart',
        component:() =>
          import(/* webpackChunkName: "quickstart" */ '../views/Quickstart.vue')
      },
      {
        path: '/faq',
        name: 'Faq',
        component: () =>
          import(/* webpackChunkName: "faq" */ '../views/Faq.vue')
      },
      {
        path: '/canvas',
        name: 'Canvas',
        component: () =>
          import(/* webpackChunkName: "canvas" */ '../views/Canvas.vue')
      },{
        path: '/updatelog',
        name: 'UpdateLog',
        component: () =>
          import(/* webpackChunkName: "updateLog" */ '../views/UpdateLog.vue')
      },{
        path: '/rect',
        name: 'Rect',
        component: () =>
          import(/* webpackChunkName: "rect" */ '../views/apis/Rect.vue')
      },{
        path: '/point',
        name: 'Point',
        component: () =>
          import(/* webpackChunkName: "Point" */ '../views/apis/Point.vue')
      },{
        path: '/paint',
        name: 'Paint',
        component: () =>
          import(/* webpackChunkName: "Paint" */ '../views/apis/Paint.vue')
      },{
        path: '/canvas',
        name: 'Canvas',
        component: () =>
          import(/* webpackChunkName: "Canvas" */ '../views/apis/Canvas.vue')
      },{
        path: '/node',
        name: 'Node',
        component: () =>
          import(/* webpackChunkName: "Node" */ '../views/apis/Node.vue')
      },{
        path: '/line',
        name: 'Line',
        component: () =>
          import(/* webpackChunkName: "Line" */ '../views/apis/Line.vue')
      },{
        path: '/animation',
        name: 'Animation',
        component: () =>
          import(/* webpackChunkName: "Animation" */ '../views/apis/Animation.vue')
      },{
        path: '/offlineLayer',
        name: 'OfflineLayer',
        component: () =>
          import(/* webpackChunkName: "OfflineLayer" */ '../views/apis/OfflineLayer.vue')
      },{
        path: '/selectLayer',
        name: 'SelectLayer',
        component: () =>
          import(/* webpackChunkName: "SelectLayer" */ '../views/apis/SelectLayer.vue')
      },{
        path: '/floatLayer',
        name: 'FloatLayer',
        component: () =>
          import(/* webpackChunkName: "FloatLayer" */ '../views/apis/FloatLayer.vue')
      },{
        path: '/animationLayer',
        name: 'AnimationLayer',
        component: () =>
          import(/* webpackChunkName: "AnimationLayer" */ '../views/apis/AnimationLayer.vue')
      },{
        path: '/msgEvent',
        name: 'MsgEvent',
        component: () =>
          import(/* webpackChunkName: "MsgEvent" */ '../views/apis/MsgEvent.vue')
      },{
        path:'/layout',
        name:'Layout',
        component: () =>
          import(/* webpackChunkName: "Layout" */ '../views/apis/Layout.vue')
      },{
        path:'/custom',
        name:'Custom',
        component: () =>
          import(/* webpackChunkName: "Custom" */ '../views/apis/Custom.vue')
      },
      {
        path:'/thirdParty',
        name:'ThirdParty',
        component: () =>
          import(/* webpackChunkName: "ThirdParty" */ '../views/apis/ThirdParty.vue')
      },{
        path: '/enterprise',
        name: 'Enterprise',
        component: () =>
          import(/* webpackChunkName: "Enterprise" */ '../views/support/Enterprise.vue')
      },
      {
        path:'/personal',
        name:'Personal',
        component:() => 
          import(/* webpackChunkName: "Personal" */ '../views/support/Personal.vue')
      },{
        path:'/devote',
        name:'Devote',
        component:() => 
          import(/* webpackChunkName: "Devote" */ '../views/support/Devote.vue')
      },{
        path:'/gtofficial',
        name:'Gtofficial',
        component:()=>
          import(/* webpackChunkName: "Gtofficial" */ '../views/community/Gtofficial.vue'),
      },{
        path:'/works',
        name:"Works",
        component:()=>
          import(/* webpackChunkName: "works" */ '../views/community/Works.vue'),
      },{
        path:'/twitter',
        name:"Twitter",
        component:()=>
          import(/* webpackChunkName: "Twitter" */ '../views/community/Twitter.vue'),
      },{
        path:'/profile',
        name:'Profile',
        component:() => 
          import(/* webpackChunkName: "introduce" */ '../views/about/Profile.vue')
      },{
        path:'/team',
        name:'Team',
        component:() => 
          import(/* webpackChunkName: "introduce" */ '../views/about/Team.vue')
      },{
        path:'/roadmap',
        name:'Roadmap',
        component:() => 
          import(/* webpackChunkName: "introduce" */ '../views/about/Roadmap.vue')
      },{
        path:'/discuss',
        name:'Discuss',
        component:() => 
          import(/* webpackChunkName: "introduce" */ '../views/about/Discuss.vue')
      },{
        path:'/joinUs',
        name:'JoinUs',
        component:() => 
          import(/* webpackChunkName: "introduce" */ '../views/about/JoinUs.vue')
      },{
        path:'/introduce',
        name:'Introduce',
        component:() => 
          import(/* webpackChunkName: "introduce" */ '../views/service/Introduce.vue')
      },{
        path:'/deploy',
        name:'Deploy',
        component:() => 
          import(/* webpackChunkName: "Deploy" */ '../views/service/Deploy.vue')
      },{
        path:'/price',
        name:'Price',
        component:() => 
          import(/* webpackChunkName: "Price" */ '../views/service/Price.vue')
      }
    ]
  },
  {
    path: '/guide',
    name: 'Guide',
    component: () =>
      import(/* webpackChunkName: "guide" */ '../views/Guide.vue')
  },
  {
    path: '/video',
    name: 'Video',
    component: () =>
      import(/* webpackChunkName: "video" */ '../views/Video.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
router.beforeEach((to, from, next) => {
  // (window as any).Store.set('anchorList', [])
  next()
})
export default router;
