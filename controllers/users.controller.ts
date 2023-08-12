import { Request, Response } from 'express';

export const getUsers = (request: Request, response: Response) => {
    response.json('hi');
}