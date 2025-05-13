import express from 'express'
import {conn} from './controllers/mongoose.js'
import multer from 'multer'
import path from 'path'
import { v2 as cloudinary } from 'cloudinary';
// Configuration
cloudinary.config({ 
    cloud_name: 'dvfnq7z6b', 
    api_key: '871543933269937', 
    api_secret: '<your_api_secret>' // Click 'View API Keys' above to copy your API secret
});

conn()
const app = express()

app.get('/',(req,res)=>{
    res.render('index.ejs')
})




//Multer
const storage = multer.diskStorage({
//   destination: './public/uploads',
  filename: function (req, file, cb) {
    
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({ storage: storage })


app.post('/upload', upload.single('file'),  async(req, res) => {
 console.log("this is req file",req.file)
const file = req.file.path

const cloudinaryResponse = await cloudinary.uploader.upload(file,{
    folder:'NodeJs_Api'
})

console.log("cloudanryResponse",cloudinaryResponse)

})


const port = 1000
app.listen(port,()=>console.log(`Express server is running on ${port}`))