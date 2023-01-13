const express = require('express');
const router = express.Router();
const {getAllEvents,addEvent,getAllUsers} = require('../controller/eventController');


router.route('/events').get(getAllEvents);
router.route('/events').post(addEvent);
router.route('/user').get(getAllUsers);


module.exports= router;