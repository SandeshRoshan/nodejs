import mongoose from 'mongoose'

export const mongodb = ()=>{ 
    mongoose.connect("mongodb+srv://srmilaptop:VLJaNrpe9TlFa5Ip@clusternode.rylsynt.mongodb.net/",{
    "dbName":"Nodejs_Express_VSCode"
})
.then(()=>console.log("MongoDB connected"))
.catch((error) =>console.log(error))

}