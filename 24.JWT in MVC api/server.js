import express from 'express'
import bodyParser from 'express'
import mongoose from 'mongoose'
import userRouter from './Routes/User.js'
import contactRouter from './Routes/Contact.js'
import {config} from 'dotenv'
import cors from 'cors'

const app = express()
app.use(bodyParser.json())

//cors setup
app.use(cors({
    origin:true,
    methods:["POST", "GET", "PUT", "DELETE"],
    credentials:true
}))

//env setup
config({path:'.env'})

//mongoose connection 
mongoose.connect(process.env.MongoUrl, { "dbName": "Contacts" })
    .then(() => console.log('MongoDB Connected'))
    .catch((error) => console.log(error))

//User Route - using middleware
app.use('/api/user', userRouter)

//Contacts Route - using middleware
app.use('/api/contacts', contactRouter)

const port = 1000;
app.listen(port, () => console.log(`Express server is running on port ${port}`))