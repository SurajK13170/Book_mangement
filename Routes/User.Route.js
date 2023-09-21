const express = require('express')
const {userModel} = require('../Model/User.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const userRoute = express.Router()

userRoute.post('/register', async(req, res)=>{
    const {name, email,password,isAdmin} = req.body;
    try{
        const existUser = await userModel.findOne({email})
        if(existUser){
            return res.status(401).json({msg:'User with this email already exist'})
        }
        bcrypt.hash(password, 5 ,async(req,hash)=>{
            const user = new userModel({name,email,password:hash,isAdmin})
            await user.save()
            res.status(201).json({msg:"User Registered"})
        })
    }catch(err){
        res.status(500).json({error:'Register Failed!'})
    }
})

userRoute.post('/login', async(req, res)=>{
    const {email,password} = req.body
    try{
        const user = await userModel.findOne({email})
        if(user){
            bcrypt.compare(password, user.password,(err, result)=>{
                if(result){
                    const token = jwt.sign({userID:user._id, user:user.name}, 'Book_Managment')
                    res.status(201).json({msg:'Login Success!',"token":token})
                }else{
                    res.json({'msg':'wrong password!'})
                }
            })
        }else{
            res.json({'msg':'wrong password!'})
        }
    }catch(err){
        res.status(500).json({err:err.message})
    }
})

module.exports = {userRoute}