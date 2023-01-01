const Contacts = require("../models/contactModel");

// Order placement
const contactCtrl = {
  message: async (req, res) => {
    try {
      const {
        name,
        tele,
        msg
      } = req.body;

      // Email validation and tests
      if (
        !name ||
        !tele ||
        ! msg
      )
        return res.status(400).json({ msg: "Please fill in all fields!" });

      const newMessage = new Contacts({
        name,
        tele,
        msg
      });
      await newMessage.save();
      res.json({ msg: "Message is sent!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};



module.exports = contactCtrl;