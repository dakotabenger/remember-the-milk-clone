const {requireAuth} = require("../auth")
const express = require('express')
const {asyncHandler,csrfProtection} = require("../ultils")
const db = require('../db/models/index')
const router = express.Router()



router.get('/', requireAuth, asyncHandler(async (req, res) => {
  const user = req.session.auth.userId
  const tasks = await db.Task.findAll({ where: {user_id: user}, order:[['start_date', 'ASC']]}); //todo cant remember if this is how you get everything for a specific user
  res.render('index', {title: 'Home',tasks})
}));


module.exports = router;
