import { Request, Response } from 'express';
import { User } from '../entity/user.entity'
import db from '../db/data-source'

export const getUsers = async(request: Request, response: Response) => {
    const users = await db.getRepository(User).find();
    response.json(users);
}

export const getUser = async(request: Request, response: Response) => {
    try {
        const user = await db.getRepository(User).findOneBy({
            id: parseInt(request.params.id),
        });
    
        if (!user){
            response.status(404).json({
                msg: 'User not found'
            });

            return;
        }
    
        response.json(user);
    } catch (error) {
        response.status(500).json({
            msg: 'Contact to administrator'
        });

        return;
    }
    
}

export const postUser = async(request: Request, response: Response) => {
    try {
        const userCreated = await db.getRepository(User).create(request.body);
        const user = await db.getRepository(User).save(userCreated);
    
        response.json(user);
    } catch (error) {
        response.status(500).json({
            msg: 'Contact to administrator'
        });

        return;
    }
  
}

export const putUser = async(request: Request, response: Response) => {
    try {
        const userUpdate = await db.getRepository(User).findOneBy(
            {
                id: parseInt(request.params.id)
            }
        );
    
        if (!userUpdate){
            response.status(404).json({
                msg: 'User not found'
            });

            return;
        }
        
        db.getRepository(User).merge(userUpdate!, request.body);
        const user = await db.getRepository(User).save(userUpdate!);
    
        response.json(user);
    } catch (error) {
        response.status(500).json({
            msg: 'Contact to administrator'
        });

        return;
    }
}

export const deleteUser = async(request: Request, response: Response) => {
    try {
        const userExist = await db.getRepository(User).findOneBy({
            id: parseInt(request.params.id)
        });
    
        if (!userExist) {
            response.status(404).json({
                msg: 'User not found'
            });

            return;
        }
    
        const user = await db.getRepository(User).delete(request.params.id);
        response.json(user);
    } catch (error) {
        response.status(500).json({
            msg: 'Contact to administrator'
        });

        return;
    }
}
