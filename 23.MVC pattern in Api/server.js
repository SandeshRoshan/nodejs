import express from 'express'
import bodyParser from 'express'
import mongoose from 'mongoose'
import userRouter from './Routes/User.js'
import contactRouter from './Routes/Contact.js'

const app = express()
app.use(bodyParser.json())

//mongoose connection 
mongoose.connect("mongodb+srv://srmilaptop:VLJaNrpe9TlFa5Ip@clusternode.rylsynt.mongodb.net/", { "dbName": "Contacts" })
    .then(() => console.log('MongoDB Connected'))
    .catch((error) => console.log(error))

//User Route - using middleware
app.use('/api/user', userRouter)

//Contacts Route - using middleware
app.use('/api/contacts', contactRouter)

const port = 1000;
app.listen(port, () => console.log(`Express server is running on port ${port}`))