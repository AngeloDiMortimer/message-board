const express = require('express');
const newRouter = require('../routes/new');
const cors = require('cors');
const { dbConnection } = require('../database/config')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 5000;

        this.DBConnection();

        this.middlewares();

        this.routes();
    }
    async DBConnection(){
        await dbConnection()
    }

    middlewares() {
        this.app.use(express.json());
    }

    routes(){
        this.app.use(newRouter);
        this.app.use(cors());
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
            console.log("This is working for now");
        })
    }
}

module.exports = Server;