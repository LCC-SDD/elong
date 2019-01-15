import Vue from 'vue'
import Router from 'vue-router'
import Admin from '../admin'
import Page from '../components/page/page.vue'
import Home from '../components/home/home.vue'
import International from '../components/international/international.vue'
import Flycar from '../components/flycar/flycar.vue'
import Hotcar from '../components/hotcar/hotcar.vue'
import Car from '../components/car/car.vue'
import Tourism from '../components/tourism/tourism.vue'
import Beijing from '../components/beijing/beijing.vue'
import Shanghai from '../components/shanghai/shanghai.vue'
import Guangzhou from '../components/guangzhou/guangzhou.vue'
import Hangzhou from '../components/hangzhou/hangzhou.vue'
import Shenzheng from '../components/shenzheng/shenzheng.vue'
import Chengdu from '../components/chengdu/chengdu.vue'
import Tiaozhuan from '../components/tiaoZhuan/tiaoZhuan.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '',
      name:'admin',
      component: Admin,
      children:[
      	{path:'',name:'page',tabs:'首页',mcy:true,component:Page,
      		children:[
      			{path:'',name:'beijing',citys:'北京出发',component:Beijing},
      			{path:'shanghai',name:'shanghai',citys:'上海出发',component:Shanghai},
      			{path:'guangzhou',name:'guangzhou',citys:'广州出发',component:Guangzhou},
      			{path:'hangzhou',name:'hangzhou',citys:'杭州出发',component:Hangzhou},
      			{path:'shenzheng',name:'shenzheng',citys:'深圳出发',component:Shenzheng},
      			{path:'chengdu',name:'chengdu',citys:'成都出发',component:Chengdu}
      		]
      	},
      	{path:'home',name:'home',tabs:'国内酒店',component:Home},
      	{path:'international',name:'international',tabs:'国际酒店',component:International},
      	{path:'flycar',name:'flycar',tabs:'机票',component:Flycar},
      	{path:'hotcar',name:'hotcar',tabs:'火车票',component:Hotcar},
      	{path:'car',name:'car',tabs:'汽车票',component:Car},
      	{path:'tourism',name:'tourism',tabs:'旅游指南',component:Tourism},
      ]
    },
    {
    	path:'/tiaoZhuan/tiaoZhuan',
    	name:'tiao',
    	component: Tiaozhuan
    }
  ]
})
export default router;