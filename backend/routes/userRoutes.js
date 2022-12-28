
const router = require("express").Router()
const userCtrl = require('../controllers/userCtrl')

/**POST routes */
router.post('/order', userCtrl.order)

module.exports = router;
