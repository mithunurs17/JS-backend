require('dotenv').config()
const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('Hello Twitter!')
})

app.get('/login', (req, res) => {
  res.send('<h1>please login</h1>')
})

app.get('/youtube', (req, res) => {
  res.send('<h2>Welcome to YouTube</h2>')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
