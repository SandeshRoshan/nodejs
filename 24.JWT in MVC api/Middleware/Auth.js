import jwt from 'jsonwebtoken'
import {User} from '../Models/user.js'

export const Authenticate = async(req,res,next) =>{
    const token = req.header('Auth')
    // console.log('This is token', token)

    if(!token) return res.status(400).json({message:'Please login first'})
    const decode = jwt.verify(token, process.env.JWT_Secret)
    // console.log(decode)
    const id = decode.userId
    let user = await User.findById(id)
    if(!user) return res.json({message:'User not found'})
    req.user = user


    next()
}