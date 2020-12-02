const {requireAuth} = require("../auth")
const express = require('express')
const {asyncHandler,csrfProtection} = require("../ultils")
const db = require('../db/models/index')
const router = express.Router()
const { check, validationResult } = require('express-validator');



router.post("/",requireAuth,csrfProtection,taskValidators,asyncHandler(async (req,res) => {
        const validatorErrors = validationResult(req);
        const userId = req.sessions.auth.userId
        const {name} = req.body
        if (validatorErrors.isEmpty()) {
                const newTask = await db.Task.build({name:name,user_id:userId})
                if (req.body.description){
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
                if(req.body.priority) {
                        newTask.priority = req.body.priority
                }
                await newTask.save()
                res.json({newTask})

        } else {
                const errors = validatorErrors.array().map((error) => error.msg);
                res.json({errors})
        }       
}))





module.exports = router