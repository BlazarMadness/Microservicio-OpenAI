import Express from "express";
import { chatRouter } from "./chat.routes";


export const routes = () => {
    const router = Express.Router();

    router.get("/", (req, res) => {
        res.send("Hello world");
    })


    router.use(chatRouter())

    return router;

    

}