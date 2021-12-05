import { Request, Response } from "express";

import { User } from "../interfaces/serverInterface";
import { ModelUser } from "../models/userModel";

export class UserController {
    
    private modelUser = new ModelUser().model();

    constructor () {};

    getUser () {
        return async (req: Request, res: Response) => {
            try {
                const id = req.params.id;
                const user: User = await this.modelUser.findById(id);
                res.send({ message: 'succesfull', code: 204, user });
            } catch (err) {
                console.log(err);
                res.send({ message: 'internal error', code: 500 });
            }
        }
    }

    getUsers () {
        return async (req: Request, res: Response) => {
            try {
                const users: User[] = await this.modelUser.find({ isDeleted: false });
                res.send({ message: 'succesfull', code: 200, users });
            } catch (err) {
                console.log(err);
                res.send({ message: 'internal error', code: 500 });
            }
        }
    }
    
    createUser () {
        return async (req: Request, res: Response) => {
            try {
                const dataNewUser: User = req.body;
                const userCreated: User = await this.modelUser.create(dataNewUser);
                res.send({ message: 'user created succesfull', code: 200, user: userCreated });
            } catch (err) {
                console.log(err);
                res.send({ message: 'internal error', code: 500 });
            }
        }
    }
    
    updateUser () {
        return async (req: Request, res: Response) => {
            try {
                const dataUserUpdate: User = req.body;
                const idUser: string = req.params.id;
                const updatedUser: User = await this.modelUser.findByIdAndUpdate(idUser, {...dataUserUpdate, isDeleted: false}, { new: true });
                res.send({ message: 'User updated succesfull', code: 204, user: updatedUser });
            } catch (err) {
                console.log(err);
                res.send({ message: 'internal error', code: 500 });
            }
        }
    }

    deleteUser () {
        return async (req: Request, res: Response) => {
            try {
                const idDeleted: string =  req.params.id;
                const userDeleted: User = await this.modelUser.findByIdAndUpdate(idDeleted, { isDeleted: true }, { new: true });
                res.send({ message: 'User deleted succesful', code: 204, user: userDeleted });
            } catch (err) {
                console.log(err);
                res.send({ message: 'internal error', code: 500 });
            }
        }
    }

}