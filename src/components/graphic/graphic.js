// import { Bar } from 'vue-chartjs'
import Vue from 'vue'
import Chart from 'chart.js'

const Graphic = Vue.extend({
  name: 'Graphic',
  data() {
    return {
      chartdata: null
    }
  },
  mounted() {
    let ctx = document.getElementById('myChart')
    let myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
        datasets: [
          {
            // one line graph
            label: 'Number of Moons',
            data: [5, 20, 5, 10, 67, 62, 27, 14],
            backgroundColor: [
              'rgba(54,73,93,.5)', // Blue
              'yellow',
              'rgba(54,73,93,.5)',
              'yellow',
              'rgba(54,73,93,.5)',
              'yellow',
              'rgba(54,73,93,.5)',
              'yellow'
            ],
            borderColor: ['#36495d', '#36495d', '#36495d', '#36495d', '#36495d', '#36495d', '#36495d', '#36495d'],
            borderWidth: 3
          }
        ]
      },
      options: {
        responsive: false,
        maintainAspectRatio: false
      }
    })
    this.chartdata = myChart
  },
  render() {
    return (
      <div>
        <canvas id="myChart" width="400" height="400"></canvas>
      </div>
    )
  }
})

export default Graphic
