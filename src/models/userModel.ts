import { model, Schema } from 'mongoose';
import { user } from './nameCollection';

export class ModelUser {
    
    constructor () {};

    model () {
        return model(user, new Schema({
            name: {
                type: String,
                minlength: 3,
                required: true
            },
            email: {
                type: String,
                minLength: 6,
                required: true,
                unique: true             
            },
            phone: {
                type: String,
                minLength: 8,
                maxLength: 16,
                unique: true
            },
            country: {
                type: String,
                required: true,
                minLength: 3,
                maxLength: 80
            },
            isDeleted: {
                type: Boolean,
                default: false
            }
        }))
    }

}