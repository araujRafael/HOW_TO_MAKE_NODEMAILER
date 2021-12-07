const nodemailer=require('nodemailer')
const SMTP_CONFIG=require('./config/smtp')
const {TEMP_HTML}= require('./template/index')

// Create a patern transporter
const transporter = nodemailer.createTransport({
  host:SMTP_CONFIG.host,
  port:SMTP_CONFIG.port,
  secure: false,
  auth:{
    user:SMTP_CONFIG.user,
    pass:SMTP_CONFIG.pass
  },
  // tls: its a type of securety connection
  tls:{
    rejectUnauthorized: false,
  }
})
// Create a sender
const email = 'remetente@gmail.com'
const _EMAIL = process.env.NODEMAILER_USER

async function run(){
  const mailSent = await transporter.sendMail({
    text:'texto da mensagem',
    subject:'assunto do email',
    // patern is your email 
    from:`${email} <${_EMAIL}>`,
    // send to myself
    to: [`${_EMAIL}`],
    html: TEMP_HTML
  })
  // remember to authorize the app to use gmail
  console.log(mailSent);
}
run()