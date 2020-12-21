const express = require('express')
const helmet = require('helmet')
const welcomeRouter = require('./welcome/welcome-router')

const server = express()
const port = process.env.PORT || 8080

server.use(helmet())
server.use(express.json())

server.use(welcomeRouter)

server.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({
    message: "Something Went Wrong"
  })
})

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})