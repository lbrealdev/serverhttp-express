const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.get('/', async (resquest, response) => {
  response.send('Server HTTP')
})

app.listen(port, (err) => {
  if (err) {
    console.log('server starting error')
  } else {
    console.log('Como-fazer server running on port:', port)
  }
})
