const dotenv = require('dotenv')
dotenv.config()

module.exports={
  host: 'smtp.gmail.com',
  port: 587,
  user: process.env.NODEMAILER_USER,
  pass: process.env.NODEMAILER_PASS
}