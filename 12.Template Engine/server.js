import express from 'express'
import path from 'path'

const app = express()
app.get('/',(req,res)=>{
    const fruits = {
        name:'apple',
        price:'100',
    }   
    

    // res.send(path.join(path.resolve(),'./index.html'))
    // res.end('Bye')
    // res.json({hi:"hi"})
    // res.sendFile(path.join(path.resolve(),'./index.html'))

    // ejs template engine // only file name needed
    res.render('index.ejs',{fruits})
})


const port = 1000
app.listen(port, ()=>console.log(`Express is running on port ${port}`))