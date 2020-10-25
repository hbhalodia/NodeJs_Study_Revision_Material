var nodemailer_var = require('nodemailer');

//Function is used to create  the tranport from which email you wnat to send the email
var transporter = nodemailer_var.createTransport({
    service :  'gmail',   //anything we can use like if you want to send the email from which authorization like yahoo , hotmail
    auth :{
        user:'hitkumar.bhalodia105373@marwadiuniversity.ac.in',
        pass:'Hit**008'
    }
});

//From whom to whom and sibject and text in the mail part
var mailOptions = {

    from : 'hitkumar.bhalodia105373@marwadiuniversity.ac.in',
    to:'hitkumarbhalodia2000@gmail.com',
    subject:'Sending the Test Email From Node Js',
    text:'Yehh. I have Learnnt how to sent the email in Node Js'
};

transporter.sendMail(mailOptions,function(error,info){
    if(error){
        console.log('error');
    }else{
        console.log('Mail Sent Successfully '+ info.response);
    }
});