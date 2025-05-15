import { Phone } from "@mui/icons-material";
import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, require: true },
    phone: { type: String, require: true },
    type: { type: String, require: true },
    createdAt: { type: Date, default: Date.now },

})

export const Contact = mongoose.model('Contacts',contactSchema)