const mongoose = require('mongoose');

exports.dbConnection = async () => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(process.env.MONGO_URL);
        console.log('database online');
    } catch (error) {
        console.log(error);
        throw new Error(`Error when starting the database: ${error}`);
    }
}