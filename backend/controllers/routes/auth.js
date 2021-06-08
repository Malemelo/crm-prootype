const router = require('express').Router();
const User = require('../../models/UserModel');
const { registerUserValidation } = require('../validation');


router.post('/register', async (req, res) => {
    console.log(req.body);
    const { error } = registerUserValidation(req.body);
    if(error) return res.status(400).json({"message":error.details[0].message});

    const phoneNumberExist = await User.findOne({phoneNumber: req.body.phoneNumber});
    if(phoneNumberExist) return res.status(400).json({ "message": `User with phone number ${req.body.phoneNumber} already exist`});

    //create new user object
    const user = new User({
        name: req.body.name,
        dateOfBirth: req.body.dateOfBirth,
        phoneNumber: req.body.phoneNumber,
        pinCode: req.body.pinCode,
        gender: req.body.gender,
        address: req.body.address,
        nrcPassport: req.body.nrcPassport
    });

    try {
        const savedUser = user.save();
        res.status(201).send(savedUser);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;