const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(process.env.MONGO_URL);

        console.log('Database online');
        
    } catch (error) {
        console.log(error);
        throw new Error(`Error when starting the database: ${error}`);
    
    }
}

module.exports = { dbConnection };