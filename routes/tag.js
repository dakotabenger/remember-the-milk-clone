const { requireAuth } = require("../auth")
const express = require('express')
const { asyncHandler, csrfProtection } = require("../ultils")
const db = require('../db/models/index')
const router = express.Router()
const { check, validationResult } = require('express-validator');


const tagNotFoundError = (id) => {
    const err = Error('Tag not found');
    err.errors = [`Tag with id of ${id} could not be found.`];
    err.title = 'Tag not found.';
    err.status = 404;
    return err;
  };

  router.get("/:id",requireAuth,asyncHandler(async (req,res,next) => {
    const user = req.session.auth.userId
    const tagId = req.params.id
    const tag = await db.Tag.findByPk(listId)
    const tags = await db.Tag.findAll({where: {tag_id:req.params.id}})
    const lists = await db.List.findAll({where: {user_id:user}})
    const tagTasks = await db.Task.findAll({where: {tag_id: tagId}})
    const data = {tag,lists,tagTasks,tags}
    if (tag) {
        const userId = req.session.auth.userId
        if (list.user_id !== userId) {
                const err = new Error('Unauthorized'); //*tag NOT Found
                err.status = 401;
                err.message = 'You are not authorized to view this task';
                err.title = 'Unauthorized';
                throw err;
        }
        renderTagPage(req,res,next,data)
} else {
        next(tagNotFoundError(tagId))
}
}))

router.post("/",requireAuth,csrfProtection,asyncHandler(async (req,res) => {
    const validatorErrors = validationResult(req);
    const user = req.session.auth.userId
    const tags = await db.Tag.findAll({where:{user_id:user}})
    const lists = await db.List.findAll({where: {user_id:user}})
    const {name} = req.body
    if (validatorErrors.isEmpty()) {
        const tag = await db.Tag.build({name,user_id:user})
        if (req.body.description) {
            tag.description = req.body.description
        }
        await tag.save()
        res.render('list', {
            tag,
            tags,
            lists,
            csrfToken: req.csrfToken(),
          })
      } else {
        const errors = validatorErrors.array().map((error) => error.msg);
        const tasks = await db.Task.findAll({ where: {user_id: user}, order:[['start_date', 'ASC']]});

        res.render('index', {
          tags,
          errors,
          lists,
          tasks,
          csrfToken: req.csrfToken(),
        })

      }
}))
router.post("/:id/delete",requireAuth,asyncHandler(async (req,res) => {
    const tag = await db.Tag.findOne({
        where: {
                id: req.params.id,
        },
});
const tasks = await db.Task.findAll({where: {tag_id:req.params.id}})
    if (tag.user_id !== req.session.auth.userId) {
        const err = new Error('Unauthorized');
        err.status = 401;
        err.message = 'You are not authorized to delete this tag.';
        err.title = 'Unauthorized';
        throw err;
    }
    tasks.forEach(async(task) => {
        task.tag_id = null
        await task.save();
    })
    await tag.destroy();
    res.redirect('/');
}))

router.post('/:id/edit', requireAuth, asyncHandler(async(req,res) => {
    const tagid = req.params.id
    const userid = req.session.auth.userId
    const lists =  await db.List.findAll({where:{user_id: userid}})
    const tags = await db.Tag.findAll({where:{user_id:userid}})
    const tag = await db.Tag.findByPk(tagid)
    if (tag) {
        const tasks = await db.Task.findAll({where:{tag_id:tagid}})
        if (tag.user_id !== userid) {
            const err = new Error('Unauthorized');
            err.status = 401;
            err.message = 'You are not authorized to edit this tag.';
            err.title = 'Unauthorized';
            throw err;
        }
        if (req.body.name) {
            tag.name = req.body.name
        }
        if (req.body.description) {
            tag.description = req.body.description
        }
        await tag.save();
        res.render('tag', {tag,tasks, lists, tags})
    }
} ) );

module.exports = router