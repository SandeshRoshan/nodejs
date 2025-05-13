import mongoose from "mongoose";

export const conn = () => { mongoose.connect(
    "mongodb+srv://srmilaptop:f5oBefbzVY6JOF1q@cloudanry.ha3ejs0.mongodb.net/",
    {"dbName":"CDB"})
    .then(()=>console.log('DB connected'))
    .catch((error) =>console.log(error))
}