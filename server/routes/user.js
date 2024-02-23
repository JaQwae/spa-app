import express from "express";
import bcrypt from "bcrypt";
import {User} from "../model/User"

const router = express.Router();

router.post('/signup', async (req, res) => {
    const {username, email, password} = req.body;
    const user = User.find({email});

    if(user) {
        return res.json({message: "User already exist"})
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
        username,
        password: hashPassword,
        password
    })

    await newUser.save()
    return res.json({message:"Record registered"})
});

export {router as UserRouter}