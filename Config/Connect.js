const mongoose = require("mongoose")
const connectDataBase = async()=>{


    try {

        mongoose.set('strictQuery', true)
        await mongoose.connect(process.env.URI)
        console.log("database connected")
    } catch (error) {
        console.log(error)
        
    }
}

module.exports=connectDataBase