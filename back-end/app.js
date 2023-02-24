const express = require('express')
const cors = require('cors')
const connectDb = require('./config/db.connection.js')


const app = express()
connectDb()

//midlewares
app.use(cors())
app.use(express.json())



app.listen(process.env.PORT, () => console.log('Server listening on port: ', process.env.PORT))