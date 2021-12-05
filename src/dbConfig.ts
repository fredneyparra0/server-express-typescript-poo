import { connect } from "mongoose";

export class DbConnect {

    constructor () {};

    async connect () {
        try {
            await connect(process.env.URI || 'mongodb://localhost/test');
            console.log('database connect succesful!!!')
        } catch (err) {
            console.log(err);
        }
    };

}