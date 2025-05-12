import { User } from "../Models/users.js";

export const userRegister = async (req,res) =>{
    const {name,email} = req.body
    try{
        let user = await User.create({name,email})

        console.log('User registered successfully',user);
        res.send('<h1> your form has submitted </h1>')
    } catch(error){
        res.send('<h1>Error </h1>')
    }
}
