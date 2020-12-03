const { requireAuth } = require("../auth")
const express = require('express')
const { asyncHandler, csrfProtection } = require("../ultils")
const db = require('../db/models/index')
const router = express.Router()
const { check, validationResult } = require('express-validator');

const taskNotFoundError = (id) => {
        const err = Error('Task not found');
        err.errors = [`Task with id of ${id} could not be found.`];
        err.title = 'Task not found.';
        err.status = 404;
        return err;
      };

const taskValidators = [
        check('name')
                .exists({ checkFalsy: true })
                .withMessage('Please provide a task'),
        check('description')
                .isLength({ max: 100 })
                .withMessage("Description must be less than 100 characters")
];

router.post("/", requireAuth, csrfProtection, taskValidators, asyncHandler(async (req, res) => {
        const validatorErrors = validationResult(req);
        const userId = req.sessions.auth.userId
        const { name } = req.body
        if (validatorErrors.isEmpty()) {
                const newTask = await db.Task.build({ name: name, user_id: userId })
                if (req.body.description) {
                        newTask.description = req.body.description
                }
                if (req.body.startDate) {
                        newTask.start_date = req.body.startDate
                }
                if (req.body.endDate) {
                        newTask.end_date = req.body.endDate
                }
                if (req.body.listId) {
                        newTask.list_id = req.body.listId
                }
                if (req.body.tagId) {
                        newTask.tag_id = req.body.tagId
                }
                if (req.body.priority) {
                        newTask.priority = req.body.priority
                }
                await newTask.save()
                res.json({ newTask })

        } else {
                const errors = validatorErrors.array().map((error) => error.msg);
                res.json({ errors })
        }
}))

// Delete single task route
router.delete(
        "/:id",
        asyncHandler(async (req, res, next) => {
                const task = await Task.findOne({
                        where: {
                                id: req.params.id,
                        },
                });
                if (task) {
                        if (req.session.auth.userId !== task.user_id) {
                                const err = new Error('Unauthorized');
                                err.status = 401;
                                err.message = 'You are not authorized to delete this task.';
                                err.title = 'Unauthorized';
                                throw err;
                        }
                        await task.destroy();
                        res.json({ message: "Deleted task." });
                } else {
                        next(taskNotFoundError(req.params.id));
                }
        })
);


// Edit Single task route
router.patch("/:id")

// Add Task to List
router.patch("/:id/list/:listId",requireAuth,asyncHandler(async (req,res,next) => {
        const taskId = req.params.id
        const listId = req.params.listId
        const task = await db.Task.findByPk(taskId)
        if (task) {
                if (task.user_id !== req.sessions.auth.userId) {
                        const err = new Error('Unauthorized');
                        err.status = 401;
                        err.message = 'You are not authorized to add this task to the choosen list.';
                        err.title = 'Unauthorized';
                        throw err;
                }
                task.update({list_id:listId})
                res.json({message:"The task has been added to the list",task})
        } else {
                next(taskNotFoundError(taskId))
        }
}))

// Delete Task from list

router.patch("/:id/list/",requireAuth,asyncHandler(async (req,res,next) => {
        const taskId = req.params.id
        const task = await db.Task.findByPk(taskId)
        if (task) {
                if (task.user_id !== req.sessions.auth.userId) {
                        const err = new Error('Unauthorized');
                        err.status = 401;
                        err.message = 'You are not authorized to delete this task from the choosen list.';
                        err.title = 'Unauthorized';
                        throw err;
                }
                task.update({list_id:null})
                res.json({message: "The task has been deleted!",task})
        } else {
                next(taskNotFoundError(taskId))
        }
}))

// Get single Task

router.get("/:id")




module.exports = router
