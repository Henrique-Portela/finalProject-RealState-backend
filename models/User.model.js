import { model, Schema } from 'mongoose'
import validator from 'validator'

const userSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: value => validator.isEmail(value)
        }
    },
    passwordHash: {
        type: String,
        required: true
    }
}, {timestamps: true})

export default model('User', userSchema)