import mongoose from "mongoose";
//t7dNMxvns6P6gtbY
export const connectionDB = ()=> {
    mongoose.connect("mongodb+srv://srmilaptop:t7dNMxvns6P6gtbY@urldb.yycbfuj.mongodb.net/",{"dbName":"UrlDB"})
    .then(()=>console.log('Mongoose connected'))
    .catch((error) =>console.log(error))
}

