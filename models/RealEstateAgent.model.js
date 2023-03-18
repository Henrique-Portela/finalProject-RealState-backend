import mongoose from 'mongoose'

const { model, Schema } = mongoose

const agentSchema = new Schema ({

    userId:{
        type: Schema.Types.ObjectId,ref:"User"
        },
     picture: {
        type: String,
        required: true
    },
    name: {
        type: String,
        require: true
        
    },
    phoneNumber: {
        type: String,
        required: true
    },
     city: {
        type: String,
        required: true
    },
     state: {
        type: String,
        required: true
    },
     realEstateLicense: {
        type: Number,
        required: true
    }

}, { timestamps: true })

export default model ('Agent', agentSchema)