const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = " apikey from sendgrid.com section 15-Lesson131"
// replace line 3 with sgMail.setApiKey(process.env.SENDGRID_API_KEY)

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'bthompson40@s.tooeletech.edu',
        subject: 'Thanks for joining',
        text: `It failed again woohoo, ${name}. Let me know if it worked`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'bthompson40@s.tooeletech.edu',
        subject: 'BYE BYE',
        text: `Goodbye, $(name). Dont come back.`
    })
}



module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}



