const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
mongoose.connect(process.env.MONGO_URL);
const app = express();

app.get('/test', (req, res) => {
    res.json('test ok');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//next thing to do: Connect the app to the databse via ATLAS