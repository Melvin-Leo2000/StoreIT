const Users = require('../models/userModel')


// Order placement  
const userCtrl = {
  order: async (req, res) => {
      try {
            const {name, date, email, number} = req.body
          
            // Email validation and tests
            if(!name || !date ||  !email || !number)
              return res.status(400).json({msg: "Please fill in all fields!"})
          
            if(!validateEmail(email))
              return res.status(400).json({msg: "Invalid email."})

            const newUser = new Users({
                name, date, email, number
            })
            await newUser.save()
            res.json({msg: "Order has been placed"})

      } catch (err){
              return res.status(500).json({msg: err.message})
          }
  } 
}


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

module.exports = userCtrl