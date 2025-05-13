import { Url } from "../models/urlSchema.js";
import shortid from "shortid";

export const longUrl = async(req,res)=>{
    try{
        const url = req.body.longurl
        console.log(url)
        const shortCode = shortid.generate()
        const shortUrl = `http://localhost:1000/${shortCode}`

        // Save to database
        const newUrl = new Url({shortCode,url})

        await newUrl.save();
        res.render('server.ejs',{shortUrl})
        console.log(shortUrl)
        
    }catch(error){
        res.send('error')
    }
}

export const getOriginalUrl = async(req,res) =>{
    const shortCode = req.params.shortCode

    //find on db
    const urlRecord = await Url.findOne({shortCode})

    if(urlRecord){
        res.redirect(urlRecord.url)
    }else{
        res.status(404).send('URL not found')
    }
}