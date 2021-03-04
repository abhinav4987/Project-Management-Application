const express = require('express');
const homecontroller = require('../controller/home_controller');
const passport = require ('passport')
const router = express.Router();
router.get('/', homecontroller.sign_up);
router.post('/create',homecontroller.create);
router.get('/sign-in',homecontroller.sign_in);
router.post('/create-session',passport.authenticate('local',{failureRedirect:"/"}),homecontroller.create_session);
router.get('/home',  passport.checkAuthentication  , homecontroller.home);
router.get('/auth',passport.authenticate('google',{scope:['profile','email']}))
router.get('/auth/google/callback',passport.authenticate('google',{failureRedirect:"/"}),homecontroller.google_create)
router.post('/destroy',homecontroller.destroy)
module.exports=router 