import User from '../models/User.js'
import bcrypt from "bcryptjs"
import {createError} from "../utils/error.js"

export const register = async(req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            phone: req.body.phone, 
            country: req.body.country,
            city: req.body.city
        })
        await newUser.save()
        res.status(200).send("User had been created")
    } catch (err) {
        next(err)
    }
}

export const login = async(req, res, next) => {
    try {

        const user = await User.findOne({username: req.body.username})
        if(!user) return next(createError(404, "User not found"))
        
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if(!isPasswordCorrect) return next(createError(400, "Wrong password or username"))
        const {isAdmin, password, ...otherDetail} = user._doc
        res.status(200).json(otherDetail)
    } catch (err) {
        next(err)
    }
}