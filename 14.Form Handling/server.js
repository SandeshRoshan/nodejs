import express from 'express'
import path from 'path'

const app = express()

app.use(express.static(path.join(path.resolve(),'public')))
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res) =>{
    res.render('index.ejs')
})

app.post('/',(req,res) =>{
    console.log('working')
    console.log(req.body)
    res.render('index.ejs',{Topic:"Form handling Successfully"})
    // res.json({Topic:"Form handling Successfull"})
})

const port = 1000;
app.listen(port,()=>console.log(`Express server is running on port ${port}`))