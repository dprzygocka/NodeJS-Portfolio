const router = require("express").Router();
const nodemailer = require("nodemailer");
//const multiparty = require("multiparty"); a way to parse multipart/form-data type

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
  
  mail.sendMail(mailOptions, function(error, body){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}


router.post("/api/contact", (req, res) => {  //data from form is sent by fetch in contactpage.js
 
/* a way to parse data send with type multipart/form-data
  let form = new multiparty.Form(); //Creates a new form.
  let data = {};
  form.parse(req, function (err, fields) { //Parses an incoming node.js request containing form data.
    console.log(fields);
    Object.keys(fields).forEach(function (property) {
      data[property] = fields[property].toString();
    });
    console.log("This data: " + data)
    main(data).catch(console.error);
  });
  */

  main(req.body);
  
  res.redirect("/contact");

});



module.exports = {

    router

};