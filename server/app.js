const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Server = require('./models/Server');

dotenv.config();

//mongoose.connect(process.env.MONGO_URL);

const server = new Server();
server.listen();

//next thing to do: Connect the app to the databse via ATLAS