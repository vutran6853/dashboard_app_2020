import Navbar from './components/navbar/navbar'
import './app.scss'

const app = {
  name: 'App',
  render() {
    return (
      <div class="app_container">
        <Navbar />
        <router-view></router-view>
      </div>
    )
  }
}

export default app
