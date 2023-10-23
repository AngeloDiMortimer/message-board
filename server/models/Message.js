const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'username is required'],
    },
    text: {
        type: String,
        required: [true, 'text is required'],
    },
    added: {
        type: Date,
        default: Date.now,
    },
})

MessageSchema.methods.toJSON = function () {
    const { __v, state, ...data } = this.toObject();
    return data;
}

export default model('Message', MessageSchema);