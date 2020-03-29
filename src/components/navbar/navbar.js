import Vue from 'vue'
import './navbar.scss'

const Navbar = Vue.extend({
  name: 'Navbar',
  data() {
    return {
      navbarItem: [
        { id: 0, path: 'Dashboard' },
        { id: 1, path: 'Tasks' },
        { id: 2, path: 'Email' },
        { id: 3, path: 'Graphic' },
        { id: 4, path: 'Chat' },
        { id: 5, path: 'Weather' },
        { id: 6, path: 'Settings' },
        { id: 7, path: 'Login' }
      ]
    }
  },
  methods: {
    handleRouteTo(event) {
      if (this.$route.path !== `/${event.target.value}`) {
        this.$router.push({ 
          path: `/${event.target.value.toLowerCase()}` 
        })
      }
      return null
    }
  },
  render() {
    let renderNavbarItem = this.navbarItem.map((value) => (
      <div class="navbar_item" key={value.id}>
        <button value={`${value.path}`} onclick={this.handleRouteTo}>
          {value.path}
        </button>
      </div>
    ))

    return (
      <div class="navbar_container">
        <div class="navbar_side_panel">{renderNavbarItem}</div>
      </div>
    )
  }
})

export default Navbar
