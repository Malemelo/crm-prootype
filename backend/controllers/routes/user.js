const UserModel = require('../../models/UserModel');

const router = require('express').Router();



// get list of all the users
router.get('/users/:id?', async (req, res) => {
    if (req.params.id) {
        const user = await UserModel.findOne({ _id: req.params.id })
        if (!user) {
            res.status(400).json({ "error": 'No user found' })
        }
        res.status(200).send({ user });
    } else {
        const users = await UserModel.find({})
        res.status(200).send({ users });
    }

});

module.exports = router;