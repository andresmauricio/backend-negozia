const User = require('../models/User');

async function createUser(req, res) {
    const { firstName, lastName, gender, phone, phoneType, email } = req.body;
    const newUser = new User({ firstName, lastName, gender, phone, phoneType, email });
    try {
        const data = await newUser.save();
        res.status(201).json({ status: 'OK', user: data });
    } catch (error) {
        console.error(error)
        res.status(400).json({ status: 'ERROR', user: false });
    }
}

async function getUsers(req, res) {
    try {
        const users = await User.find();
        res.status(200).json({ status: 'OK', users });
    } catch (error) {
        console.error(error);
        res.status(404).json({ status: 'ERROR', users: false });
    }
}


module.exports = {
    saveUser: createUser,
    getUser: getUsers
}