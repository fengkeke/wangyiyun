import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/wangyizhuye.vue'


//网易主页面
import Home from '../components/wangyiyunAPP/Home.vue'
//网易子页面
import Home_1 from '../components/wangyiyunAPP/hot.vue'
import Shiping from '../components/wangyiyunAPP/shiping.vue'
import Diantai from '../components/wangyiyunAPP/diantai.vue'

import Home_2 from '../components/wangyiyunAPP/recommend.vue'
import Home_3 from '../components/wangyiyunAPP/search.vue'
import Home_4 from '../components/wangyiyunAPP/user.vue'
import Home_6 from '../components/wangyiyunAPP/zhuye.vue'
import Login from '../components/wangyiyunAPP/login.vue'
import Reg from '../components/wangyiyunAPP/reg.vue'
import Gedan from '../components/wangyiyunAPP/gedan.vue'
import Bofang from '../components/wangyiyunAPP/bofang.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloW',
      component: Hello
    }, {
      path: '/Home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'd1',
          component: Home_1
        },
        {
          path: 'd2',
          component: Home_2
        },
        {
          path: 'd3',
          component: Home_3
        },
        {
          path: 'd4',
          component: Home_4
        },
        {
          path: 'd6',
          component: Home_6,
          children: [{
            path: 'c1',
            component: Home_1,
          },
          {
            path: 'c2',
            component: Shiping,
          },
          {
            path: 'c3',
            component: Diantai,
          }
        ]
        }
      ]
    },{
      path: '/Login',
      name: 'Login',
      component: Login,
    },{
      path: '/Reg',
      name: 'Reg',
      component: Reg,
    },{
      path: '/Gedan',
      name: 'Gedan',
      component: Gedan,
    },{
      path: '/Bofang',
      name: 'Bofang',
      component: Bofang,
    }
  ]
})
