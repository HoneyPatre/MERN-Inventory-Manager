import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    itemcode: {
        type: String,
        required: true
    },
    name1: {
        type: String,
        required: true
    },
    name2: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    vendorname: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;