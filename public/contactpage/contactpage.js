/*
        async function formMethod(){
            const myform = document.getElementById("contactPageForm");
            console.log("in the method")
            const form = new FormData(myform);
            const response = await fetch("/contact", {method: POST, body: form});
            const result = await response.json();
            console.log(result)

            const mail = await nodemailer.createTransport({
                service: 'gmail',
                auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
                }
            });

            const mailOptions = {
                from: result.Email, //why this is overwritten
                to: 'daga.106@gmail.com',
                subject: result.Subject,
                //text: "Message was sent by: " + req.body.FirstName + " " + req.body.LastName + "\nEmail: " + req.body.Email 
                //+ "\nPhone number: " + req.body.Phone + "\nMessage:\n" + req.body.Message
            };
            
            mail.sendMail(mailOptions, function(error, info){
                if (error) {
                console.log(error);
                } else {
                console.log('Email sent: ' + info.response);
                }
            })
        }
*/