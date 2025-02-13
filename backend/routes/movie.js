const express = require('express');
const router = express.Router();
const  {create,edit,update,remove}= require('../controllers/moviesController');

router.post('/create',create);
router.put('/update',update);
router.delete('/remove',remove);
router.get('/edit',edit);

module.exports=router;

