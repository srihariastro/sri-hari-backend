const mongoose = require('mongoose')

// const dbURI = 'mongodb+srv://atulsen:Y_53h64LyPLHPC6@cluster0.0flk3.mongodb.net/astrofriends';
const dbURI = 'mongodb+srv://srihariastro:srihariastro@cluster0.vk3tx.mongodb.net/srihariastro'


module.exports = function dbConnection() {
    mongoose.connect(dbURI, {bufferCommands: false})
    console.log("connected to database")
}