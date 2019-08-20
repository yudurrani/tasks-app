const sgMail = require ('@sendgrid/mail')



sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to:email,
        from: 'yudurrani@gmail.com',
        subject: 'Thanks for joining in',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'yudurrani@gmail.com',
        subject: 'Your account has been cancelled',
        text: `Hi ${name} , Your account has been cancelled as per your request. Please let us know why did you cancel and how can we improve`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}
// sgMail.send({
//     to: 'yudurrani@gmail.com',
//     from: 'yudurrani@gmail.com',
//     subject: 'This is my first creation',
//     text: ' I hope this one actually get to you'
// })