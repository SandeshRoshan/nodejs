import express from 'express';

const app = express();


//C = Create => POST (method)
//R = Read => GET (method)
//U = Update => PUT (method)
//D = Delete => DELETE (method)

//Read get method
app.get('/',(req,res) =>{
    console.log('This is home route')
    res.send('This is your response')
})

app.get('/product',(req,res) =>{
    console.log('This is product route')
    res.json({products:[
        {title : 'Iphone' , price : '1000000' },
        {title:'oneplus' , price: '20000'}
    ]})
})

const port = 1000;
app.listen(port,()=>console.log(`Express Server is running on port ${port}`));