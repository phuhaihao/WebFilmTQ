
const mongoose = require('mongoose');   
async function dbConnect(){
       
    await mongoose.connect('mongodb://localhost:27017/film_db')
        
}

module.exports =  dbConnect;
