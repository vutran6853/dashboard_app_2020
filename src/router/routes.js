import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.js'
// import App from '../App.vue'
import Room from '../components/room/room'
import Rent from '../components/rent/rent'
import tasks from '../components/tasks/tasks'
import graphic from '../components/graphic/graphic'

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
    path: '/graphic',
    name: 'Graphic',
    component: graphic
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
