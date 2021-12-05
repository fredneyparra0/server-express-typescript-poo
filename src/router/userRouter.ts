import { Router } from "express";
import { UserController } from "../controllers/userController";

export class UserRouter {
    
    constructor () {};

    routeUser () {
        const userRouter = Router();
        const userController = new UserController(); 

        userRouter.get('/user/:id',  userController.getUser());
        userRouter.get('/users',  userController.getUsers());
        userRouter.post('/user',  userController.createUser());
        userRouter.put('/user/:id',  userController.updateUser());
        userRouter.delete('/user/:id',  userController.deleteUser());

        return userRouter;
    }

}