const mongoose = require('mongoose')
const orderBookSchema = mongoose.Schema({
    user: {type:String,required:true, ref:'User'},
    books: {type:String,required:true,ref:'Book'},
    totalAmount: {type:String,required:true}
   
})

const OrderBookModel = mongoose.model('OrderedBook',orderBookSchema)


module.exports = {OrderBookModel}