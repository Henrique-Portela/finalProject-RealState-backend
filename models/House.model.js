import mongoose from 'mongoose'

const { model, Schema } = mongoose

const houseSchema = new Schema ({

     userId:{
     type: Schema.Types.ObjectId,ref:"User" // Referencia do usuario byId
     },
    address: {
        street: {
            type: String,
            required: true
        },
        neighborhood: {
            type: String,
            
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        zipCode: {
            type: Number,
            required: true
        },
    },
       
     sellRent: {
        type: String,
        required: true
    },
    picture: {
        type: Array,
        require: true
        
    },
    builtYear: {
        type: Number,
        required: true
    },
     price: {
        type: Number,
        required: true
    },
     bedRooms: {
        type: Number,
        required: true
    },
     baths: {
        type: Number,
        required: true
    },
     houseSize: {
        type: String,
        required: true
    }
}, { timestamps: true })

export default model ('House', houseSchema)