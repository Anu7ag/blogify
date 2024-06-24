const express = require('express')
const router = express.Router()
const { staticSignIn, staticSignUp, handleUserSignUp, handleUserSignIn } = require('../controllers/user')

router.route('/signin').get(staticSignIn).post(handleUserSignIn)
router.route('/signup').get(staticSignUp).post(handleUserSignUp)




module.exports = router