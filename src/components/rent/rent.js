import Vue from 'vue'

const state = {
  person1: {
    payment: 0,
    rent: null,
    name: 'Vu'
  },
  person2: {
    payment: 0,
    rent: null,
    name: 'Tran'
  },
  name: ['---', 'Vu', 'Tran'],
  selectedName: ''
}

const Rent = Vue.extend({
  name: 'Rent',
  data() {
    return state
  },
  methods: {
    handleSubmitPayment() {
      console.log(state.person1)
      if (state.person1.payment !== 0 && state.selectedName !== '---') {
        // state.person1.payment = parseFloat(e.target.value)
      }
      if (state.person2.payment !== 0 && state.selectedName !== '---') {
        // state.person1.payment = parseFloat(e.target.value)
      }
    },
    handleSetPayment(event) {
      if (state.selectedName === 'Vu') {
        state.person1.payment = parseFloat(event.target.value)
      }
      if (state.selectedName === 'Tran') {
        state.person2.payment = parseFloat(event.target.value)
      }
      return null
    },
    handleSelectName(event) {
      if (event.target.value !== '---') {
        state.selectedName = event.target.value
      }
      return null
    }
  },

  render() {
    let renderName = state.name.map((value) => (<option key={value} value={value}>{value}</option>))

    return (
      <div>
        <h1>Rent Payment</h1>
        <select onchange={this.handleSelectName}>{renderName}</select>
        <input type="number" value={this.payment} name="payment" onchange={this.handleSetPayment} />
        <button type="submit" onclick={this.handleSubmitPayment}>
          Submit
        </button>
      </div>
    )
  }
})

export default Rent
