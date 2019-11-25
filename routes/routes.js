const express = require('express')

const router = express.Router();

const { body } = require('express-validator')

const controllers = require('../controllers/controllers')

router.get('/contact', controllers.getContact)

router.post('/contact', [
    body('email').isEmail().withMessage('Please enter a vaild email address.').normalizeEmail(),
    body('name').not().isEmpty().withMessage('Please enter your name'),
    body('subject').not().isEmpty().withMessage('Please enter a subject'),
    body('message').not().isEmpty().withMessage('Please enter your message')
], controllers.postEmail)

router.get('/about', controllers.getAbout)


router.use(controllers.getIndex)

module.exports = router