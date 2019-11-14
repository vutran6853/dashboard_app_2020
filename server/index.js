const express = require('express')
const consola = require('consola')
const cors = require('cors')
const app = express()
const PORT = 3100

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.listen(PORT, () => {
  // console.log('Server is UP and listen to port', + PORT)
  consola.success('Server is UP and listen to port', +PORT)
  console.log('consola === ', consola._reporters[0].options.dateFormat)
  console.log('consola === ', consola._reporters[0].options.formatOptions)

  // consola.info('Reporter: Some info')
  // consola.error(new Error('Foo'))
})
