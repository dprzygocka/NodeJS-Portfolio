const router = require("express").Router();
const nodemailer = require("nodemailer");


router.post("/api/contact", (req, res) => {

 
  const mail = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD
        }
  });

  const mailOptions = {
        from: req.body.Email, //why this is overwritten
        to: 'daga.106@gmail.com',
        subject: req.body.Subject,
        text: "Message was sent by: " + req.body.FirstName + " " + req.body.LastName + "\nEmail: " + req.body.Email 
        + "\nPhone number: " + req.body.Phone + "\nMessage:\n" + req.body.Message
  };
      
  mail.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
  });
  res.redirect("/contact");
  


});



module.exports = {

    router

};