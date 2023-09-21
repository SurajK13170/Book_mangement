const express = require('express')
const mongoose = require('mongoose')
const {connection} = require('./db')
const {userRoute} = require('./Routes/User.Route')
const {bookRoute} = require('./Routes/Book.route')
const {orderRoute} = require('./Routes/Order.Route')
require('dotenv').config()
const app = express()

app.use(express.json())
const PORT = process.env.PORT
 app.use('/api',userRoute)
 app.use('/api',bookRoute)
 app.use('/api',orderRoute)





app.listen(`${PORT}`, async(req, res)=>{
    try{
        connection
        console.log('connected to DB!')
    }catch(err){

    }
    console.log(`Server is running at port number ${PORT}`)
})