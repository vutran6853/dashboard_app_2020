import './navbar.scss'

const navbar = {
  name: 'Navbar',
  data() {
    return {
      // navbarItem: ['room', 'rent', 'Item3', 'Item4'],
      navbarItem: ['Dashboard', 'Tasks', 'Email', 'Contacts', 'Chat', 'Weather', 'Settings', 'Login']
    }
  },

  methods: {
    handleRouteTo(e) {
      if (this.$route.path !== `/${e.target.value}`) {
        this.$router.push({ path: `/${e.target.value.toLowerCase()}` })
      }
      return null
    }
  },

  render() {
    console.log(this)
    let renderNavbarItem = this.navbarItem.map((value) => (
      <div class="navbar_item">
        <button value={`${value}`} onClick={this.handleRouteTo}>
          {value}
        </button>
      </div>
    ))

    return (
      <div class="navbar_container">
        <div class="navbar_side_panel">{renderNavbarItem}</div>
      </div>
    )
  }
}

export default navbar
