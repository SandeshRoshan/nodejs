import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    shortCode:String,
    url:String
})

export const Url = mongoose.model('shortUrl',urlSchema)