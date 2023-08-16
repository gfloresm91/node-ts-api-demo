import express, { Application } from 'express';
import cors from 'cors';
import db from '../db/data-source';

import userRoutes from '../routes/user.route';

class Server {
    private app: Application;
    private port: string;
    private apiPaths = {
        users: '/api/users'
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';
        
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection() {
        try {
            await db.initialize()
                .then(() => {
                    console.log("Data Source has been initialized!")
                })
                .catch((err) => {
                    console.error("Error during Data Source initialization", err)
                })
        } catch (error) {
            throw new Error('Unable to connect to the database');
        }
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.apiPaths.users, userRoutes)
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Server is running on port ' + this.port);
        })
    }
}

export default Server;