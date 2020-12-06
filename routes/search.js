const { requireAuth } = require("../auth");
const express = require("express");
const Sequelize = require("sequelize");
const { asyncHandler, csrfProtection } = require("../ultils");
const db = require("../db/models/index");
const router = express.Router();


//If no values found, return nothing
// need to add tags. There is an error when rendering 
// change render page from index to search

router.get('/', requireAuth,csrfProtection, asyncHandler(async (req, res) => {
  const user = req.session.auth.userId
  const tags = await db.Tag.findAll({where: {user_id:user}})
  const tasks = await db.Task.findAll({
    where: {
      user_id: user,
      name: { [Sequelize.Op.iLike]: `%${req.query.search}%` },
      // name:"hello2"
    },
    order: [["start_date", "ASC"]],
  }); 
      // console.log("11111111111111111111111111111111111111111111111111:      ",req.query.search)
  const lists = await db.List.findAll({where:{user_id:user}})
  res.render('index', {title: 'Home',tasks,lists,tags,csrfToken: req.csrfToken()})
}));

module.exports = router