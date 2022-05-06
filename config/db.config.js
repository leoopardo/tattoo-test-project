const mongoose = require("mongoose")

async function connect(){
    try{
        const dbConnect = await mongoose.connect(process.env.MONGODB_URI);
        console.log("connect at server:", process.env.MONGODB_URI)
    }catch(error){
        console.error(error)
    }
}

module.exports = connect