// Basic imports
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')

// Cors setup
const allowedOrigins = ['http://localhost:5173'];
app.use(cors({
    credentials: true,
    origin: allowedOrigins
}))

// Middleware config
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())

// Importing routes
const userRoutes = require('./routes/userRoutes')
const jobRoutes = require('./routes/jobRoutes')
const competitionRoutes = require('./routes/competitionRoutes')

// Port
const PORT = 8080

// Database connection 
const MONGO_URL = "mongodb+srv://bishalkundu17:bishalkundu17@cluster0.vf8n1xt.mongodb.net/JobHub?retryWrites=true&w=majority&appName=Cluster0"

main().catch(err => console.log(err)) 
async function main() {
    await mongoose.connect(MONGO_URL)
    app.listen(PORT, () => {
        console.log(`Server started at PORT ${PORT}!`)
    })
}

// Routes
app.use('/api/auth', userRoutes)
app.use('/api/job', jobRoutes)
app.use('/api/competition', competitionRoutes)
