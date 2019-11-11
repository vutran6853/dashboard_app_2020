// import Navbar from '../Navbar/Navbar'
// import  from 'vue'

// const layout = {
//   name: 'Layout',
//   render() {
//     return (
//        <div>
//          <Navbar/>
//           {/* {VNodeChildren} */}
//        </div>
//     );
//   }
// }

const Layout = {
  name: 'Layout',
  data: function() {},
  created: function() {
    console.log('enter')
  },
  mounted: {
    renderComponent() {
      console.log('enter')
      // if (this.$route.path ) {

      // }
      // return null
    }
  },

  render() {
    // {this.renderComponent}
    return (
      <div>
        Layout
        {/* {props} */}
      </div>
    )
  }
}

export default Layout
