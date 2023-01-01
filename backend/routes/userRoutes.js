
const router = require("express").Router()
const userCtrl = require('../controllers/userCtrl')
const contactCtrl = require('../controllers/contactCtrl')

/**POST routes */
router.post('/order', userCtrl.order)
router.post('/contact', contactCtrl.message)

module.exports = router;
