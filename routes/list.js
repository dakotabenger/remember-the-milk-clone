const { requireAuth } = require("../auth")
const express = require('express')
const { asyncHandler, csrfProtection } = require("../ultils")
const db = require('../db/models/index')
const router = express.Router()
const { check, validationResult } = require('express-validator');
const moment = require('moment')

const renderListPage = (req,res,next,data) => {
    const {list,lists,listTasks, tags} = data
    res.render("list",{list,lists,listTasks,tags})
}

const listNotFoundError = (id) => {
    const err = Error('List not found');
    err.errors = [`List with id of ${id} could not be found.`];
    err.title = 'List not found.';
    err.status = 404;
    return err;
  };

router.get("/:id",requireAuth,asyncHandler(async (req,res,next) => {
        // console.log("11111111111111111111111111111111111111111111")
    const userId = req.session.auth.userId
    const listId = req.params.id
    const list = await db.List.findByPk(listId)
    const lists = await db.List.findAll({where: {user_id:userId}})
    const listTasks = await db.Task.findAll({where: {list_id:listId}})
    const tags = await db.Tag.findAll({where: {user_id:userId}})
    const data = {list,lists,listTasks,tags}
//     console.log(list)
    if (list) {
        if (list.user_id !== userId) {

                const err = new Error('Unauthorized'); //*tag NOT Found
                err.status = 401;
                err.message = 'You are not authorized to view this task';
                err.title = 'Unauthorized';
                throw err;
        }
        // console.log("22222222222222222222222222222222",list.user_id)
        renderListPage(req,res,next,data)
} else {
        next(listNotFoundError(listId))
}
}))

router.post("/",requireAuth,csrfProtection,asyncHandler(async (req,res) => {
    const validatorErrors = validationResult(req);
    const user = req.session.auth.userId
    const lists = await db.List.findAll({where:{user_id:user} })
    const {name} = req.body
    if (validatorErrors.isEmpty()) {
        const list = await db.List.create({name,user_id:user})
        res.render('list', {
            list,
            lists,
            csrfToken: req.csrfToken(),
          })
      } else {
        const errors = validatorErrors.array().map((error) => error.msg);
        const tasks = await db.Task.findAll({ where: {user_id: user}, order:[['id', 'ASC']]});
        res.render('index', {
          errors,
          lists,
          tasks,
          csrfToken: req.csrfToken(),
        })

      }
}))

router.post("/:id/delete",requireAuth,asyncHandler(async (req,res,next) => {
    const list = await db.List.findOne({
        where: {
                id: req.params.id,
        },
});
const tasks = await db.Task.findAll({where: {list_id:req.params.id}})
if (list) {
        if (req.session.auth.userId !== list.user_id) {
                const err = new Error('Unauthorized');
                err.status = 401;
                err.message = 'You are not authorized to delete this task.';
                err.title = 'Unauthorized';
                throw err;
        }
        tasks.forEach(async (el) => {
            await el.destroy()
        })
        await list.destroy();
        res.redirect("/");
} else {
        next(listNotFoundError(req.params.id));
}
}))

router.post("/:id/edit",requireAuth,csrfProtection,asyncHandler(async (req,res,next) => {
    const listId = req.params.id
    const {name} = req.body.name
    const list = await db.List.findByPk(listId)
    if (list && name) {
        if (req.session.auth.userId !== list.user_id) {
                const err = new Error('Unauthorized');
                err.status = 401;
                err.message = 'You are not authorized to edit this task.';
                err.title = 'Unauthorized';
                throw err;
        }
       list.name = name
       await list.save()
} else {
        next(listNotFoundError(req.params.id));
}

}))


module.exports = router
