// create and export an express application
// with its middleware/handlers/endpoints --> synonymous

const express = require('express')
const server = express()
const HubsRouter = require('./hubs/hubs-router')

server.use(express.json())
server.use('./api/hubs', HubsRouter)

server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `)
})

module.exports = server