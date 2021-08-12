require("dotenv/config")
express = require("express");
nodemailer = require("nodemailer")
router = express.Router();

router.post("/email", (req,res)=>{
    const {name,email,message} = req.body
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD
        }
      });
      
      var mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: `Email from portfolio site by ${email}`,
        html: `<div><h2>${name}</h2><hr/><p>${message}</p></div>`
            
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
})

module.exports = router;