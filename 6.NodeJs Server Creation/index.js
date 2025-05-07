import http from 'http';

const server = http.createServer((req,res) =>{
    console.log("Our server is established successfully");
    const date = new Date();
    console.log('last time server hit ', date);
    res.end("Thank you for request");
});



const port = 1000;
server.listen(port, ()=> console.log(`Sever is runing on port ${port}`));