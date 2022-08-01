// DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')
const bandsController = require('./controllers/bands_controller')
const stagesController = require('./controllers/stages_controllers')
const eventsController = require('./controllers/events_controller')

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/bands', bandsController)
app.use('/stages', stagesController)
app.use('/events', eventsController)
// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})