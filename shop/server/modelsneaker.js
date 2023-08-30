import mongoose from "mongoose";

const sneakerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    sneakerimage: {
        type: String,
        required: true
    },
});

export default mongoose.model('Sneaker', sneakerSchema);