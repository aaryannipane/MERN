var nodemailer = require('nodemailer');

// NOT WORKING WATCH ON W3SCHOOLS

var  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "aaryan28102002@gmail.com",
        pass: "Nipane@28102002"
    }
});

var mailOptions = {
    from: 'aaryan28102002@gmail.com',
    to: 'nipaneeducation@gmail.com',
    subject: 'Sending mail using node.js',
    text: "That was easy!"
};

// Multiple Receivers
// To send an email to more than one receiver, add them to the "to" property of the mailOptions object, separated by commas:

// var mailOptions = {
//     from: 'youremail@gmail.com',
//     to: 'myfriend@yahoo.com, myotherfriend@yahoo.com',
//     subject: 'Sending Email using Node.js',
//     text: 'That was easy!'
// }

// Send HTML
// To send HTML formatted text in your email, use the "html" property instead of the "text" property:
// var mailOptions = {
//     from: 'youremail@gmail.com',
//     to: 'myfriend@yahoo.com',
//     subject: 'Sending Email using Node.js',
//     html: '<h1>Welcome</h1><p>That was easy!</p>'
// }

transporter.sendMail(mailOptions, (err, info)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Email sent:" + info.response);
    }
})