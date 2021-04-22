const router = require("express").Router();
const nodemailer = require("nodemailer");
const dotenv = require('dotenv'); //module that loads environment variables from a .env file into process.env
dotenv.config();

async function main(body){

  let mail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  let mailOptions = {
    from: '<"${body.Email}">', //why this is overwritten???
    to: process.env.EMAIL,
    subject: body.Subject,
    text: "Message was sent by: " + body.FirstName + " " + body.LastName + "\nEmail: " + body.Email 
    + "\nPhone number: " + body.Phone + "\nMessage:\n" + body.Message
  };
  
  mail.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}


router.post("/api/contact", (req, res) => {  //have to try to do it with fetch!!!

 
  main(req.body).catch(console.error)
  
  res.redirect("/contact");

});



module.exports = {

    router

};