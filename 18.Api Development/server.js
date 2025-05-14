import express from 'express'
import bodyParser from 'express'


const app = express()

app.use(bodyParser.json())

const contacts = [
    {id:1, name:'Superman', email:'superman@gmail.com', phone:1234567890},
    {id:2, name:'Thor', email:'thor@gmail.com', phone:1234567890},
    {id:3, name:'BatMan', email:'batman@gmail.com', phone:1234567890},
    {id:4, name:'Spiderman', email:'spiderman@gmail.com', phone:1234567890},
    {id:5, name:'Ironman', email:'ironman@gmail.com', phone:1234567890},
]

//Get all contacts
app.get('/api/contacts',(req,res)=>{
    res.json(contacts)
})

//Get specific contact
app.get('/api/contacts/:id',(req,res)=>{
    const id = req.params.id
    const filterContacts = contacts.filter((contact) =>contact.id == id)
    res.json(filterContacts)
})

//Post contact - add new contact
app.post('/api/contacts/add',(req,res) =>{
    // const {id,name,email,phone} = req.body
    console.log(req.body)
    res.json(req.body)

})




const port = 1000;
app.listen(port,()=>console.log(`Express server is running on port ${port}`))