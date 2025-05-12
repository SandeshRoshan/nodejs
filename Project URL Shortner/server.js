import express from 'express'
import path from 'path'
import {connectionDB} from './controllers/mongoose.js'
import { Url } from './models/urlSchema.js'
import { longUrl,getOriginalUrl } from './controllers/url.js'

connectionDB()
const app = express()

//middleware
app.use(express.static(path.join(path.resolve(),'public')))
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res) =>{
    res.render('server.ejs',{shortUrl:null})
})

//handel url submission
app.post('/shorten',longUrl)

// redirect to original url
app.get('/:shortCode',getOriginalUrl)

const port = 1000;
app.listen(port,()=>console.log(`Express server is running on ${port}`))
