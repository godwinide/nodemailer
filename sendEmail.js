const nodemailer = require('nodemailer')
const mylist = require("./email_list1.json")



// // Create a transporter object
const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true, // use SSL/TLS
    auth: {
        user: 'clinton@3xwaves.online', // your Zoho Mail email address
        pass: 'nH12B4HMdWpX' // your Zoho Mail password
    }
});

const mailOptions = {
    from: 'Clinton@3xwaves.online', // sender's email address
    to: 'godwinide@gmail.com', // recipient's email address
    subject: 'Good afternoon Godwin',
    text: 'This email was sent using Node.js and Zoho Mail. Cheers!'
};


transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error(error);
    } else {
        console.log('Email sent successfully:', info.response);
    }
});

