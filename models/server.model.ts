import express, { Application } from 'express';
import cors from 'cors';
// import db from '../db/connection.db';

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
        
        // this.dbConnection();
        this.middlewares();
        this.routes();
    }

    // async dbConnection() {
    //     try {
    //         await db.authenticate();
    //         console.log('Connection has been established succesfully');
    //     } catch (error) {
    //         throw new Error('Unable to connect to the database');
    //     }
    // }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
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