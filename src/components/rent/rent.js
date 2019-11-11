// import Navbar from '../Navbar/Navbar'

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

const rent = {
  name: 'Rent',
  data() {
    return state
  },
  payment1: 1,
  methods: {
    handleSubmitPayment: function() {
      console.log(state.person1)
      if (state.person1.payment !== 0 && state.selectedName !== '---') {
        // state.person1.payment = parseFloat(e.target.value)
      }
      if (state.person2.payment !== 0 && state.selectedName !== '---') {
        // state.person1.payment = parseFloat(e.target.value)
      }
    },
    handleSetPayment: function(e) {
      if (state.selectedName === 'Vu') {
        state.person1.payment = parseFloat(e.target.value)
      }
      if (state.selectedName === 'Tran') {
        state.person2.payment = parseFloat(e.target.value)
      }
      return null
    },
    handleSelectName: function(e) {
      // console.log(e.target.value)
      if (e.target.value !== '---') {
        state.selectedName = e.target.value
      }
      return null
    }
  },

  render() {
    let renderName = state.name.map((value) => <option value={value}>{value}</option>)

    return (
      <div>
        <h1>rent Payment</h1>
        <p>asdasdasdasds</p>
        <select onChange={this.handleSelectName}>{renderName}</select>
        <input type="number" value={this.payment} name="payment" onChange={this.handleSetPayment} />
        <button type="submit" onClick={this.handleSubmitPayment}>
          Submit
        </button>
      </div>
    )
  }
}

export default rent
