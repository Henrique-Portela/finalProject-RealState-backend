import express from 'express'
import dotenv from 'dotenv/config'
import cors from 'cors'
import connectDb from './config/db.connection.js'
import authRouter from './routes/auth.routes.js'

//const express = require('express')
//const cors = require('cors')
//const connectDb = require('./config/db.connection.js')

const app = express()
connectDb()


app.use(cors())
app.use(express.json())
app.use(authRouter)



app.listen(process.env.PORT || 3001, () => console.log('Server listening on port: ', process.env.PORT || 3001))