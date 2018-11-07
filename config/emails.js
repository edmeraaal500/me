var smtpClient= require('smtpc')
var Mailer= require('nodemailer')

var transporter = Mailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'cloudistrife.94@gmail.com',
      pass: 'dasrisiko518'
    }
  });

module.exports.sendMail= function(from,content){
    var mailOptions = {
        from: from,
        to: 'aymansmimah@gmail.com',
        subject: 'Sending Email using Node.js',
        text: content.body
      };

    return new Promise((resolve,reject)=>{
         transporter.sendMail(mailOptions,function(err,info){
             if(err){
                console.log('error: ' + err)
                reject(err)
             }
             else{
                console.log(info.response)
                resolve(info.response)
             }
         })
    })
}