import express from 'express'
import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://srmilaptop:VLJaNrpe9TlFa5Ip@clusternode.rylsynt.mongodb.net/",{
    "dbName":"Nodejs Express VSCode"
})
.then(()=>console.log("MongoDB connected"))
.catch((error) =>console.log(error))

const app = express()

const port = 1000

app.listen(port,()=>console.log(`Express server is running on port ${port}`))