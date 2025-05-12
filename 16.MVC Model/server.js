import express from 'express'
import path from 'path'
import { userRegister } from './Controllers/user.js'
import {mongodb} from './Controllers/mongoose.js'

mongodb()
const app = express()

//middleware
app.use(express.static(path.join(path.resolve(),'public')))

app.use(express.urlencoded({extended:true}))

//Route
app.get('/',(req,res) =>{
    res.render('index.ejs')

})

app.post('/',userRegister)

const port = 1000

app.listen(port,()=>console.log(`Express server is running on port ${port}`))