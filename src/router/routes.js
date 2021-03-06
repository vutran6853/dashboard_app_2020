import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.js'
// import App from '../App.vue'
import Room from '../components/room/Room'
import Rent from '../components/rent/Rent'
import Tasks from '../components/tasks/Tasks'
import Graphic from '../components/graphic/Graphic'

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
    component: Tasks
  },
  {
    path: '/graphic',
    name: 'Graphic',
    component: Graphic
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
