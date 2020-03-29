import Vue from 'vue'
import Navbar from './components/navbar/Navbar'
import './app.css'

const App = Vue.extend({
  name: 'App',
  render() {
    return (
      <div class="app_container">
        <Navbar />
        <router-view></router-view>
      </div>
    )
  }
})

export default App
