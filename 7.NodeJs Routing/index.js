import http from 'http';

const server = http.createServer((req,res)=>{
    // console.log("Server is established successfully")
    // console.log(req.url);
    // res.end('thanks!')

    if (req.url === '/spiderman') {
        // console.log('You belong from marvel')
        res.end('You belong from marvel')
    }else if(req.url === '/batman'){
        res.end('you belongs from dc')
    }
})



const port = 1000;
server.listen(port,()=> console.log(`Listening on port ${port}`))


