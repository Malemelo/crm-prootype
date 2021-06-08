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

// updating users
router.put('/users', async (req, res) => {
    try {
        const updatedUser = await UserModel.updateOne({ _id: req.body._id }, { ...req.body })
        if (!updatedUser) {
            res.status(400).json({ "error": 'Something went wrong' })
        }
        res.status(200).send({ user: updatedUser });
    } catch (error) {
        res.status(400).json({ "error": error })
    }

});

// delete user by id

router.delete('/users/:id', async (req, res) => {
    try {
        const deleteUser = await UserModel.deleteOne({ _id: req.params.id })
        if (!deleteUser) {
            res.status(404).json({ "error": 'User Not found' })
        }
        res.status(200).send({ deleteUser });
    } catch (error) {
            res.status(400).send({error});
    }

});

module.exports = router;