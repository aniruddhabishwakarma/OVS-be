const express = require('express');
const router = express.Router();
const {registerAdmin,updateAdmin,getAdmin} = require('../controller/adminController');



router.route('/admin').post(registerAdmin);
router.route('/admin/:id').put(updateAdmin);
router.route('/admin').get(getAdmin)


module.exports= router;

