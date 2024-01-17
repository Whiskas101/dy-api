const express = require("express")
const router = express.Router()

// controllers
const {attemptLogin} = require('../controllers/user')


router.post('/login', attemptLogin)

module.exports = router
