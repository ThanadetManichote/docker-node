const express = require('express')
const app = express()
//port from env is 8123
const port = process.env.NODE_PORT

// =================================================================
// Response Start
// =================================================================

// Set output
const welcome = { 'status': 200, 'message': 'Welcome to our api!' }
const received = { 'status': 200, 'message': 'already received' }

// Root Api Node
// exam. localhost:8123/
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// exam. localhost:8123/welcome
app.get('/welcome', (req, res) => {
    res.json(welcome)
})


// run node
app.listen(port, function() {
    console.log('listening on port! ' + port)
})

// =================================================================
// Response End
// =================================================================