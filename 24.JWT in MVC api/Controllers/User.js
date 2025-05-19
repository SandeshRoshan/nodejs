import { User } from '../Models/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
    const { name, email, password } = req.body
    let userCheck = await User.findOne({ email })
    if (userCheck) return res.json({ message: 'User is already registered' })
    const hashPass = await bcrypt.hash(password, 10)
    const user = await User.create({
        name, email, password: hashPass,
    })
    res.json({ message: 'User register successfuly.', user })
}

export const login = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (!user) return res.status(401).json({ message: 'User not found' })
    const validPass = await bcrypt.compare(password, user.password)

    if (!validPass) return res.json({ message: 'Incorrect password' })

    const token = jwt.sign({userId:user._id},process.env.JWT_Secret,{expiresIn:'1d'})
    
    res.json({ message: `Welcome back ${user.name}`, token })
}