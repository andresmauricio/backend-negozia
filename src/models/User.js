const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    gender: { type: String, required: true},
    phone: { type: Number, required: true},
    phoneType: { type: String, required: true},
    email: { type: String, required: true, unique: true, lowercase: true},
});

module.exports = model('User', UserSchema);