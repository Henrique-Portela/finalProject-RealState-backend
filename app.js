import express from 'express'
import dotenv from 'dotenv/config'
import cors from 'cors'
import connectDb from './config/db.connection.js'
import authRouter from './routes/auth.routes.js'
import houseRouter from './routes/house.routes.js'
import agentRouter from './routes/realEstateAgent.routes.js'


const app = express()
connectDb()


app.options("*", cors()),
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    app.use(cors());
    next();
});


app.use(express.json())
app.use(authRouter)
app.use(houseRouter)
app.use(agentRouter)





app.listen(process.env.PORT || 3001, () => console.log('Server listening on port: ', process.env.PORT || 3001))