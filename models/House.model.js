import mongoose from 'mongoose'

const { model, Schema } = mongoose

const houseSchema = new Schema ({
    address: {
        type: String,
        required: true
    },
     buySeelRent: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        
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
        type: String,
        required: true
    },
     baths: {
        type: String,
        required: true
    },
     houseSize: {
        type: String,
        required: true
    }
}, { timestamps: true })

export default model ('House', houseSchema)