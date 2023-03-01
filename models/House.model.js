import mongoose from 'mongoose'

const { model, Schema } = mongoose

const houseSchema = new Schema ({
    address: {
        type: String,
        required: true
    },
     sellRent: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
        
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