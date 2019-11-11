import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
// import App from '../App.vue'
import Room from '../components/room/room'
import Rent from '../components/rent/rent'
import tasks from '../components/tasks/tasks'
import Item4 from '../components/item4/Item4'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/room',
    name: 'Room',
    component: Room
  },
  {
    path: '/rent',
    name: 'Rent',
    component: Rent
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: tasks
  },
  {
    path: '/item4',
    name: 'Item4',
    component: Item4
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
