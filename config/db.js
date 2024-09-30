 const mongoose = require('mongoose');
 const colors = require('colors');

 const connectDB = async() => {
     try {
         await mongoose.connect('mongodb+srv://shubh:shubh@cluster0.ujgd1kl.mongodb.net/')
         console.log(`Mongodb connected ${mongoose.connection.host}`.bgGreen.white)
     } catch (error) {
         console.log(`Mongodb Server Issue ${error}`.bgRed.white)
     }
 };

 module.exports = connectDB;
