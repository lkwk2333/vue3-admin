import { createRouter as _createRouter, createWebHashHistory } from 'vue-router'

import Layout from '@/components/layout/index.vue'
import Home from '@/views/home/index.vue'
import About from '@/views/home/index.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      { path: '/home', component: Home },
      { path: '/about', component: About }
    ]
  }
]

export const router = _createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes // `routes: routes` 的缩写
})
