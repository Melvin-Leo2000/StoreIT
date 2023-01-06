const router = require("express").Router();
const clientCtrl = require("../controllers/clientCtrl");

/**GET routes */
router.get("/admin", clientCtrl.allInfo);

module.exports = router;
