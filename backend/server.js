const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const express = require('express')
const { readdirSync } = require('fs')
const connectDatabase = require('./config/database')
const errorMiddleware = require('./middlewares/errors')

// Handle Uncaught exceptions
process.on('uncaughtException', (err) => {
	console.log(`ERROR: ${err.message}`)
	console.log('Shutting down due to Uncaught Exception')
	process.exit(1)
})

// Config Env Path
dotenv.config({ path: 'backend/config/.env' })

// Connect database
connectDatabase()

// Create App
const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// Routes
readdirSync('backend/routes').map((route) => {
	app.use('/api', require(`./routes/${route}`))
})

// Middleware
app.use(errorMiddleware)

// Start server
const port = process.env.PORT || 5000
const server = app.listen(port, () => {
	console.log(`Server started on port ${port} in ${process.env.NODE_ENV} mode.`)
})

// Handle Unhandled Promise rejection.
process.on('unhandledRejection', (err) => {
	console.log(`ERROR: ${err.message}`)
	console.log('Shutting down the server due to Unhandled Promise rejection')
	server.close(() => {
		process.exit(1)
	})
})
