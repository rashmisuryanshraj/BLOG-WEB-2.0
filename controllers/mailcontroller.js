// const nodemailer = require("nodemailer");
    const mailcontroller = async (req,res)=>{
    let testAccount = await nodemailer.createTestAccount();
    
    // connect to the SMPT
    let transporter = await nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 465,
        auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: 'yvette51@ethereal.email',
        pass: 'HKR616FV1sGH8jTmfp'
      },
    });
    let info = await transporter.sendMail({
        from: '"Suryansh raj 👻" <jaihind@001>', // sender address
        to: "suryanshraj0@gmail.com", // list of receivers
        subject: "Hello Suryansh", // Subject line
        text: "Hello Suryansh", // plain text body
        html: "<b>Hello Suryansh</b>", // html body
      });
      console.log("Message sent: %s", info.messageId);
      res.json(info) 
    
    
    try {
        res.render('mail')
    } catch (error) {
        console.log(error.message);
    }
}

export default mailcontroller;