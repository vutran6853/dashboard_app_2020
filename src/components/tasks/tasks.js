// import Navbar from '../Navbar/Navbar'
import rangeYear from '../../helper/rangeYear'
import rangeMonth from '../../helper/rangeMonth'
import './task.scss'
import * as type from '../../store/task/task_mutations'
import * as action from '../../store/task/task_action'

const tasks = {
  name: 'Tasks',
  data() {
    return {
      gas: {
        payment: 0,
        date: ''
      },
      water: {
        payment: 0,
        date: ''
      },
      internet: {
        payment: 0,
        date: ''
      }
    }
  },
  created() {
    console.log('created component')
    console.log(this.$store)
    this.$store.commit(type.SET_NEW_ITEM, {
      text: 'HEllo world'
    })
    this.$store.dispatch(action.UPDATE_NEW_ITEM_ACTION, {
      text: 'HEllo world'
    })

    this.$store.dispatch(action.UPDATE_ITEM_ISTRUE_ACTION, {
      id: 1
    })
  },
  methods: {
    handleSetPayment(e) {
      this[e.target.name] = {
        ...this[e.target.name],
        payment: parseFloat(e.target.value)
      }
    },
    handleSetDate(e) {
      this[e.target.name] = {
        ...this[e.target.name],
        date: e.target.value
      }
    },
    handleSubmitInfo(e) {
      console.log(e.defaultPrevented)
      e.preventDefault()
      console.log(e.defaultPrevented)
      // console.log('d', e.target.name, e.target.value)
      if (this.gas.payment !== 0 || this.water.payment !== 0 || this.internet.payment !== 0) {
        console.log('post to DB')
        this.handleResetState(e)
        return alert('post to DB')
      } else {
        console.log('do not post to DB')
        alert('unable to post to DB')
      }
      return null
    },
    handleResetState(e) {
      e.preventDefault()
      this.gas = {
        payment: 0,
        date: ''
      }
      this.water = {
        payment: 0,
        date: ''
      }
      this.internet = {
        payment: 0,
        date: ''
      }
    }
  },
  computed: {
    defaultYear: {
      get() {
        return rangeYear()
      }
    },
    defaultMonth: {
      get() {
        return rangeMonth()
      }
    }
  },

  render() {
    // let renderYear = this.defaultYear.map((value) => {
    //   return <option>{value}</option>
    // })
    // let renderMonth = this.defaultMonth.map((value) => {
    //   return <option>{value}</option>
    // })

    return (
      <div class="utitles_container">
        <form class="utitles_form">
          <div>
            <h1>Placeholder</h1>
          </div>
          <div>
            <p>Gas:</p>
            <input type="number" name="gas" value={this.gas.payment} onChange={this.handleSetPayment} />
            <input type="date" name="gas" value={this.gas.date} onChange={this.handleSetDate} />
          </div>

          <div>
            <p>Water:</p>
            <input type="number" name="water" value={this.water.payment} onChange={this.handleSetPayment} />
            <input type="date" name="water" value={this.water.date} onChange={this.handleSetDate} />
          </div>

          <div>
            <button class="btn_clear" onClick={(e) => this.handleResetState(e)}>
              clear
            </button>
            <button class="btn_submit" onClick={(e) => this.handleSubmitInfo(e)}>
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default tasks
