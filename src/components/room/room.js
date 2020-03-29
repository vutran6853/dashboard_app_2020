import Vue from 'vue'
import action from '../../store/task/task_action'

const Room = Vue.extend({
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
    handleUserText(event) {
      console.log(this.$store)
      this.$store.dispatch(action.updateNewItem, event.target.value)
    },
    handleUpdateBool(passId) {
      this.$store.dispatch(action.updateItemIsTrue, passId)
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
            <input type="checkbox" name={value.text} onclick={() => this.handleUpdateBool(value.id)} />
          </h3>
        </div>
      )
    })

    return (
      <div>
        Room Components
        <input placeholder="Enter a message" onchange={this.handleUserText} value={this.text} />
        {renderItem}
      </div>
    )
  }
})

export default Room
