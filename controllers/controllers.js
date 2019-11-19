const { validationResult } = require('express-validator')

const nodemailer = require('nodemailer')

const fromEmail = 'joshua@mathfactsmastery.com'
const fromPass = process.env.FROM__PASS

const transporter = nodemailer.createTransport({
    host: 'mail.mathfactsmastery.com',
    name: 'mail.mathfactsmastery.com',
    port: 465,
    secure: true,
    auth: {
        user: fromEmail,
        pass: fromPass
    }
})

let items = [
    {title: 'Experience', text: 'With over 10 years experience teaching and tutoring in classrooms and homes, we can support your child to understand and master curriculum.'},
    {title: 'Philosophy', text: 'We believe in the innate genius of every child.  Given the right support and materials, your child can learn and thrive.'}
]

exports.getIndex = (req, res, next) => {
    res.render('home', {pageTitle: 'Home',  path: '/', items})
}

let contactConstants = {
    pageTitle: 'Contact',  path: '/contact'
}

function renderContact(res, args){
    res.render('contact', {...contactConstants, ...args})
}

exports.getContact = (req, res, next) =>{
    renderContact(res, {email: '', name: '', subject: '', message: '', emailSent: false})
}

exports.postEmail = async (req, res, next) =>{
    const errors = validationResult(req)
    let { email, name, subject, message } = req.body
    let to = 'joshua@mathfactsmastery.com'
    let from = to
    let text = `
    name: ${name}
    subject: ${subject}
    email: ${email}
    message: ${message}`
    let objectToSend = {...contactConstants, email, name, subject, message}
    if (!errors.isEmpty()){
        objectToSend.emailSent = false
        objectToSend.feedback = errors.array()[0].msg
        console.log(objectToSend.feedback)
    } else {
        await transporter.sendMail({to, from, text, subject: 'Email sent on educationformastery'})
        objectToSend.emailSent = true
    }
    try {
        renderContact(res, {...objectToSend})
    } catch(err) {
        console.log(err)
    }
}

exports.getAbout = (req, res, next) =>{
    res.render('about', {pageTitle: 'About',  path: '/about'})
}