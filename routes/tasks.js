const { requireAuth } = require("../auth")
const express = require('express')
const { asyncHandler, csrfProtection } = require("../ultils")
const db = require('../db/models/index')
const router = express.Router()
const { check, validationResult } = require('express-validator');

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
router.patch("/:id/list/:listId")

// Delete Task from list

router.patch("/:id/list/")

// Get single Task

router.get("/:id")




module.exports = router
