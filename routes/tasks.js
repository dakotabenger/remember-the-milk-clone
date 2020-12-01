//Jerzy

const express = require('express')
const csrf = require('csurf');
const csrfProtection = csrf({cookie: true})
const db = require('../db/models')
const task = require('../db/models/task');
const user = require('../db/models/user');
const {Task, User} = require('../db/models/index');
const router = express.Router()

const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next)


//Show all tasks
//Probably make an asyncHandler function
//(W11D4 Data-Driven Apps - Part 2) - Querying and rendering a temporary list of books
router.get('/', asyncHandler(async (req, res) => {
        const tasks = await db.Task.findAll({ include: User, order:[['start_date', 'ASC']]}); //todo cant remember if this is how you get everything for a specific user
        res.render('index', {title: 'Home',tasks})
}));

// Adding, modifying, and deleting a task don't require a new page.
// Those events are in ./public/javascripts/events


module.exports = router