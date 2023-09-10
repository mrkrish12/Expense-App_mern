const mongoose = require('mongoose')

const connectDb = async()=>{
    try {
      const MONGO_URL = "mongodb+srv://Krisha:wasd123@cluster0.nscxf4g.mongodb.net/users"
        await mongoose.connect(MONGO_URL)
        console.log(`Server running on ${mongoose.connection.host}`)
        console.log('krishna');
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDb;
