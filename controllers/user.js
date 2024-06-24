const User = require('../models/user')
const staticSignIn = async (req, res) => {
    return res.render('signin')
}

const staticSignUp = async (req, res) => {
    return res.render('signup')
}
const handleUserSignUp = async (req, res) => {
    const { fullName, email, password } = req.body
    await User.create({
        fullName,
        email,
        password,
    })
    return res.redirect('/')
}
const handleUserSignIn = async (req, res) => {
    const { email, password } = req.body;
    const user = User.matchPassword(email, password)
    console.log('User', user)
    return res.redirect('/')


}

module.exports = {
    staticSignIn,
    staticSignUp,
    handleUserSignUp,
    handleUserSignIn,

}