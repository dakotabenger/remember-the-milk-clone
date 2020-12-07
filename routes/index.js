const {requireAuth} = require("../auth")
const express = require('express')
const {asyncHandler,csrfProtection} = require("../ultils")
const db = require('../db/models/index')
const router = express.Router()



router.get('/', requireAuth,csrfProtection, asyncHandler(async (req, res) => {
  const user = req.session.auth.userId
  const tasks = await db.Task.findAll({ where: {user_id: user}, order:[['id', 'ASC']]}); 
  const tags = await db.Tag.findAll( {where: {user_id:user} } )
  const lists = await db.List.findAll( {where:{user_id:user} } ) 
  res.render('index', {title: 'Home',tasks,lists,tags,csrfToken: req.csrfToken()})
}));


module.exports = router;
