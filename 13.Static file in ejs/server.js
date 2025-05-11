import express from 'express'
import path from 'path'


const app = express()

// Using middleware
app.use(express.static(path.join(path.resolve(),'public')))

app.get('/',(req,res)=>{
    const fruits = {
        name:'apple',
        price:'100',
    }   

    // ejs template engine // only file name needed
    res.render('index.ejs',{fruits})
})


const port = 1000
app.listen(port, ()=>console.log(`Express is running on port ${port}`))