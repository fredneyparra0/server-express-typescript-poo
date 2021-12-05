import { Router } from "express";
import { UserRouter } from "./userRouter";

export class Routes {

    routes () {
        const router = Router();

        const userRouter = new UserRouter();
        router.use('/', userRouter.routeUser());

        return router;
    }

}