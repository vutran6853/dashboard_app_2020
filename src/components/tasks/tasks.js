// import Navbar from '../Navbar/Navbar'
import rangeYear from '../../helper/rangeYear'
import rangeMonth from '../../helper/rangeMonth'
import './task.scss'

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
      e.preventDefault()
      console.log('d', e.target.name, e.target.value)
      if (this.gas.payment !== 0 || this.water.payment !== 0 || this.internet.payment !== 0) {
        console.log('post to DB')
        this.handleResetState()
      } else {
        console.log('do not post to DB')
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
            <button class="btn_clear" type="submit" onClick={this.handleResetState}>
              clear
            </button>
            <button class="btn_submit" type="submit" onClick={this.handleSubmitInfo}>
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default tasks
