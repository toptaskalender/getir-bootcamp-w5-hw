const nodemailer = require('nodemailer')

function sendEmail({ req, email, passwordResetToken }) {
  const passwordResetLink = `${req.protocol}://${req.get('host')}/api/v1/reset-password/${passwordResetToken}`
  const text              = `Here is your password reset link.\n\nPlease perform a patch request with your new password and confirmed password to the link:\n${passwordResetLink}\n\nBest regards\nGelsin Team`

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  return transporter.sendMail({
    from: '<noreply@gelsin.com>',
    to: `${email}`,
    subject: 'Reset Password',
    text: text,
  })
}

module.exports = sendEmail