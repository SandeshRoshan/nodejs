import express from 'express'
import bodyParser from 'express'
import mongoose from 'mongoose'
import { Contact } from './Models/contact.js'


const app = express()
app.use(bodyParser.json())

//mongoose connection 
mongoose.connect("mongodb+srv://srmilaptop:VLJaNrpe9TlFa5Ip@clusternode.rylsynt.mongodb.net/",{"dbName":"Contacts"})
.then(()=>console.log('MongoDB Connected'))
.catch((error) =>console.log(error))



//Get all contacts
app.get('/api/contacts',async (req,res)=>{
    const contacts = await Contact.find()
    if(!contacts) return res.json({message:'No Contact found',contacts})
    res.json({message:'Contact Fetched',contacts})
})

//Get specific contact
app.get('/api/contacts/:id', async(req,res)=>{
    const id = req.params.id
    const idContact = await Contact.findById(id)
    if(!idContact)
        return res.json({message:'No Contact found on given id ',idContact})
    res.json({message:'Contact fonud for given id',idContact})

})

//Post contact - add new contact
app.post('/api/contacts/add', async(req,res) =>{
    const {name,email,phone,type} = req.body

    const saveContact = await Contact.create({
        name,email,phone,type,
    })

    res.json({message:'Contact saved successfully!', saveContact})
    

})

//Put - Update contact
app.put('/api/contact/:id', async(req,res)=>{
    const id = req.params.id
    const {name,email,phone,type} = req.body

    const updateContact = await Contact.findByIdAndUpdate(id,{
       name,email,phone,type, 
    },{new:true}
)

//Delete - Delete contact
app.delete('/api/contact/:id', async(req,res)=>{
    const id = req.params.id
    console.log(id)
    const deleteContact = await Contact.findByIdAndDelete(id)
    if(!deleteContact) return res.json({message:'Contact not exist!',deleteContact})
    res.json({message:'Contact deleted succesfully!',deleteContact})
})



if(!updateContact) return res.json({message:'No contact found'})
res.json({message:'Contact Updated!',updateContact})

})




const port = 1000;
app.listen(port,()=>console.log(`Express server is running on port ${port}`))