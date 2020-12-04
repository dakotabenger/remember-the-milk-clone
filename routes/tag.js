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
    const tagId = req.params.id
    const tag = await db.Tag.findByPk(listId)
    const tags = await db.Tag.findAll({where: {tag_id:req.params.id}})
    const Lists = await db.List.findAll()
    const listTasks = await db.Task.findAll({where: {list_id:listId}})
    const data = {list,lists,listTasks}
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
router.delete("/:id",requireAuth,asyncHandler(async (req,res) => {
    const tag = await db.Tag.findOne({
        where: {
                id: req.params.id,
        },
});
}))
