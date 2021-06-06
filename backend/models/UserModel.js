const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    dateOfBirth: {
        type: String,
        required: true,
        min: 6,
        max: 10
    },
    phoneNumber: {
        type: String,
        required: true,
        min: 10,
        max: 13
    },
    pinCode: {
        type: String,
        required: true,
        min:4,
        max:4
    },
    address: {
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    nrcPassport: {
        type: String,
        required: true,
        min: 6,
        max: 12,
    },
    gender: {
        type: String,
        required: true,
        min: 4,
        max: 10,
    }
});

module.exports = mongoose.model('User', userSchema);