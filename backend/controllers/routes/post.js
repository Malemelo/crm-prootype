const router = require('express').Router();



router.post('/post', async (req, res) => {
    res.status(200).send({name:req.body.name});  
});

module.exports = router;