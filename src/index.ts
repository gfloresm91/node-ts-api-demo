import dotenv from 'dotenv';
import Server from './helpers/server.helpers';
import 'reflect-metadata';

dotenv.config();

const server = new Server();

server.listen();