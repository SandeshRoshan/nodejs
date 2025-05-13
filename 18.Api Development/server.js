import express from 'express'
const app = express()

const contacts = [
    {id:1, name:'Superman', email:'superman@gmail.com', phone:1234567890},
    {id:1, name:'Thor', email:'thor@gmail.com', phone:1234567890},
    {id:1, name:'BatMan', email:'batman@gmail.com', phone:1234567890},
    {id:1, name:'Spiderman', email:'spiderman@gmail.com', phone:1234567890},
    {id:1, name:'Ironman', email:'ironman@gmail.com', phone:1234567890},
]

app.get('/contacts',(req,res)=>{
    res.json(contacts)
})


const port = 1000;
app.listen(port,()=>console.log(`Express server is running on port ${port}`))