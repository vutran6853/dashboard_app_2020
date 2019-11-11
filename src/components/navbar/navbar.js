// import 'vue'
import './navbar.scss'

const navbar = {
  name: 'Navbar',
  data: function() {
    return {
      // navbarItem: ['room', 'rent', 'Item3', 'Item4'],
      navbarItem: ['Dashboard', 'Tasks', 'Email', 'Contacts', 'Chat', 'Weather', 'Settings', 'Login']
    }
  },

  methods: {
    handleRouteTo(e) {
      if (this.$route.path !== `/${e.target.value}`) {
        // console.log('enter')
        this.$router.push({ path: `/${e.target.value}` })
      }
      return null
    }
  },

  render() {
    let renderNavbarItem = this.navbarItem.map((value, index) => (
      // <div  class="navbar_item" >
            <button class="navbar_item" value={`${ value}`} onClick={(e) => this.handleRouteTo(e)}>
        {index}: {value}
      </button>
      // </div>
    ))

    return (
      <div class="navbar_container">
        <div class="navbar_side_panel">
          {renderNavbarItem}
        </div>
      </div>
    )
  }
}

export default navbar
