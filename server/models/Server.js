const express = require('express');
const newRouter = require('../routes/new');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 5000;
        this.paths = {
            new: '/new',
        };
        this.middlewares();

        this.routes();
    }

    middlewares() {
        this.app.use(express.json());
    }

    routes(){
        this.app.use( this.paths.new , newRouter);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
            console.log("This is working for now");
        })
    }
}

module.exports = Server;