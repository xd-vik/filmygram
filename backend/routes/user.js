const express = require('express');
const router = express.Router();

const {login}= require('../controllers/Auth')
const {auth,isAdmin} = require('../middlewares/auth')

router.post('/login',login);

// protected Route(middleware add karna hai jisko allow karna hai(role bases))
router.post('/admin',auth,isAdmin,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to the Dashboard"
    });
});


module.exports = router;