const Users = require("../models/userModel");
// Order placement
const clientCtrl = {
  allInfo: async (req, res) => {
    try {
      const client = await Users.find();
      res.status(200).json(client);
    } catch (err) {
      return res.status(400).json({ msg: err.message });
    }
  },
};

module.exports = clientCtrl;
