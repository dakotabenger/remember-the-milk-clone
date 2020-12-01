var express = require('express');
var router = express.Router();
const db = require("../db/models/")
const {asyncHandler,csrfProtection} = require("../ultils")
const bcrypt = require('bcryptjs')


/* GET users listing. */
router.get('/sign-up')

router.post('/sign-up', asyncHandler(async function(req, res, next) {
  const salt = await bcrypt.genSaltSync(10);
  const hashedPassword = await bcrypt.hash(req.body.password,salt)
  const newUser = await db.User.create({email: req.body.email,hashedPassword:hashedPassword,createdAt: Date.now(),updatedAt: Date.now()})
  res.redirect("/tasks")
}));

module.exports = router;
