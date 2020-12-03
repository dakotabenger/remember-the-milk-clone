var express = require('express');
var router = express.Router();
const db = require("../db/models/")
const {asyncHandler,csrfProtection} = require("../ultils")
const bcrypt = require('bcryptjs')
const { loginUser, logoutUser } = require('../auth');
const { check, validationResult } = require('express-validator');


const userValidators = [
check('email')
  .exists({ checkFalsy: true })
  .withMessage('Please provide a Email Address')
  .isEmail()
  .withMessage('Email Address is not a valid email'),
check('password')
  .exists({ checkFalsy: true })
  .withMessage('Please provide a Password'),
check('confirmPassword')
  .exists({ checkFalsy: true })
  .withMessage('Please confirm your Password')
  .custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Confirm Password does not match Password');
    }
    return true;
  }),
];

const loginValidators = [
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a Email Address'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a Password'),
];
/* GET users listing. */
router.get('/sign-up',csrfProtection,asyncHandler(async (req,res) => {
  const newUser = db.User.build();
  res.render('sign-up', {
    title: 'Register',
    newUser,
    csrfToken: req.csrfToken(),
  });
}))

router.post('/sign-up', csrfProtection,userValidators, asyncHandler(async function(req, res, next) {
  const validatorErrors = validationResult(req);
if (validatorErrors.isEmpty()) {
  const salt = await bcrypt.genSaltSync(10);
  const hashedPassword = await bcrypt.hash(req.body.password,salt)
  const newUser = await db.User.create({email: req.body.email,hashedPassword:hashedPassword,createdAt: Date.now(),updatedAt: Date.now()})
  loginUser(req,res,newUser);
  return req.session.save(() => {
    res.redirect("/")
  })

} else {
  const errors = validatorErrors.array().map((error) => error.msg);
  res.render('sign-up', {
    title: 'Register',
    errors,
    csrfToken: req.csrfToken(),
  })

}
}));

router.get("/login",csrfProtection,asyncHandler(async (req,res) => {
  res.render('log-in', {
    title: 'Login',
    csrfToken: req.csrfToken()
  })
}))

router.post("/login",csrfProtection,loginValidators,asyncHandler(async (req,res) => {
  let errors = [];
  const {email, password} = req.body
  const validatorErrors = validationResult(req);
  if (validatorErrors.isEmpty()) {
  const user = await db.User.findOne({ where: { email } });

  if (user !== null) {
    const passwordCheck = await bcrypt.compare(password,user.hashedPassword.toString());
    console.log('user exists');
    if (passwordCheck) {
      console.log('valid password');
      loginUser(req,res,user)
     return req.session.save((err) => {
        return res.redirect('/');
      });
    }
  }
  errors.push('Failed Login');
    } else {
      errors = validatorErrors.array().map((error) => error.msg);
    }
    res.render('log-in', {
      title: 'Login',
      email,
      errors,
      csrfToken: req.csrfToken(),
    });
}))
router.post('/logout', (req,res) => {
  logoutUser(req,res)
  return req.session.save((err) => {
    return res.redirect('/');
  });
})
module.exports = router;
