const {requireAuth} = require("../auth")
const express = require('express')
const {asyncHandler,csrfProtection} = require("../ultils")
const db = require('../db/models/index')
const router = express.Router()
const { check, validationResult } = require('express-validator');



router.post("/",requireAuth,csrfProtection,taskValidators,asyncHandler(async (req,res) => {
        const validatorErrors = validationResult(req);
        if (validatorErrors.isEmpty()) {
                const newTask = await db.Task.create({})
        } else {
                const errors = validatorErrors.array().map((error) => error.msg);
                res.json({errors})
        }       
}))





module.exports = router