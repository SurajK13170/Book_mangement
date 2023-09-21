const express = require('express')
const {auth} = require('../MiddelWare/auth')
const {OrderBookModel} = require('../Model/OrderBook,model')
const {userModel} = require('../Model/User.model')
const { BookModel } = require('../Model/Book.Model');


const orderRoute = express.Router()

orderRoute.post('/order', auth, async(req, res)=>{
    try{
        const {userId, bookId, totalAmount} = req.body
        const user = await userModel.findById(userId)
        const book = await BookModel.find({_id:{$in:bookId}})

        const order  = new OrderBookModel({user:userId,books:bookId,totalAmount})
        await order.save()
        res.status(201).json({msg:'Order Placed!'})


    }catch(err){
        res.status(500).json(err)
    }
})

orderRoute.get('/orders', auth, async(req, res)=>{
    try{
        const order = await OrderBookModel.find()
        .populate('user','name email')
        .populate('books', 'title author price')

        res.status(200).json(order)
    }
    catch(err){
        res.status(500).json(err)
    }
})

module.exports = {orderRoute}