// import Navbar from '../Navbar/Navbar'

const room = {
  name: 'Room',
  data() {
    return {
      text: 'I love jsx',
      text4: 'I live for now'
    }
  },
  created() {
    // console.log(this.name)
  },
  methods: {
    handleUserText(e) {
      console.log(this.$store)
      this.$store.dispatch('updateNewItemAction', e.target.value)
    },
    handleUpdateBool(passId) {
      this.$store.dispatch('updateItemisTrueAction', passId)
    }
  },
  computed: {
    item: {
      get() {
        return this.$store.getters.getItem
      }
    }
  },

  render() {
    let renderItem = this.item.map((value) => {
      return (
        <div>
          <h1>{value}</h1>
          <h3>
            {value.isTrue ? 'true' : 'false'}
            <input type="checkbox" name={value.text} onClick={() => this.handleUpdateBool(value.id)} />
          </h3>
        </div>
      )
    })

    return (
      <div>
        room.jsx
        <input placeholder="Enter a message" onChange={this.handleUserText} value={this.text} />
        {renderItem}
      </div>
    )
  }
}

export default room
