import Vue from 'vue'
import Router from 'vue-router'
// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
import Hello from '@/components/Hello'
import Sela from '@/components/Sela'
import Dialog from '@/components/dialog/dialog'
import Header from '@/components/header/header'
import Cell from '@/components/cell/cell'
import Navbar from '@/components/navbar/navbar'
import Tabbar from '@/components/tabbar/tabbar'
import Button from '@/components/button/button'
import Toast from '@/components/toast/toast'
import DemoTest from '@/demos/demo_test'

// 0. 如果使用模块化机制编程，導入Vue和VueRouter，要调用 Vue.use(VueRouter)
Vue.use(Router)
// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }
// const routes = [
//   { path: '/foo', component: Hello },
//   { path: '/bar', component: Sela }
// ]
// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
export default new Router({
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
  routes: [
  { path: '/demoTest', component: DemoTest },
  { path: '/toast', component: Toast },
  { path: '/button', component: Button },
  { path: '/tabbar', component: Tabbar },
  { path: '/navbar', component: Navbar },
  { path: '/header', component: Header },
  { path: '/cell', component: Cell },
  { path: '/hello', component: Hello },
  { path: '/dialog', component: Dialog },
  { path: '/sela', component: Sela }
  ]
})
