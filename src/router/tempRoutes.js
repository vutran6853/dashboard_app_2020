// import Vue from 'vue'
import { Route } from 'vue-router'
// import Home from '../components/Home'
// import App from '../App.vue'
// import Room from '../components/room/room'
// import Rent from '../components/rent/rent'
// import tasks from '../components/tasks/tasks'
// import graphic from '../components/graphic/graphic'

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: Home
//   },
//   {
//     path: '/room',
//     name: 'Room',
//     component: Room
//   },
//   {
//     path: '/rent',
//     name: 'Rent',
//     component: Rent
//   },
//   {
//     path: '/tasks',
//     name: 'Tasks',
//     component: tasks
//   },
//   {
//     path: '/graphic',
//     name: 'Graphic',
//     component: graphic
//   }
// ]

// export default (
//   <div>
//     <Route to="/graphic" component={graphic}></Route>
//     <Route to="/tasks" component={tasks}></Route>
//   </div>
// )

const routes = {
  name: 'Routes',
  data() {
    return {
      isTrue: false
    }
  },
  created() {
    if (this.$route.path === '/tasks') {
      this.isTrue = true
    } else {
      this.isTrue = false
    }
  },
  render() {
    let renderMe = this.isTrue === true ? <Route to="/graphic"></Route> : <Route to="/tasks"></Route>
    return <div>{renderMe}</div>
  }
}

export default routes
