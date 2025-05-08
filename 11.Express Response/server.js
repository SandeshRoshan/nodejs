import express from 'express'
import path from 'path'

const app = express()

const fruits= [{name:'apple' , color:'red',price:100,         stock:"available" }, {name:'mango', color:'yellow', price:80, stock:'available'}]

const dir = path.resolve()
console.log(dir)
const url = path.join(dir,'./index.html')
// const url = path.join(`${dir}/index.html`)
// const url = dir+'/index.html'
console.log(url)




//GET method
app.get('/',(req,res)=>{
    console.log('This is home route')
    // res.send('You are on home page')
    // res.end('You are on home page')
    // res.json({fruits:fruits[1]})

    res.sendFile(url)



})

// app.get('/fruit',(req,res)=>{
//     res.json({ fruits:[{name:'apple' , color:'red',price:100, stock:"available" }, {name:'mango', color:'yellow', price:80, stock:'available'}]
//     })
// })

const port = 1000;
app.listen(port,()=>console.log(`Express is running on port ${port}`))