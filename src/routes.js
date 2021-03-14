const express = require('express')
const router = express.Router();
const { user, recipe } = require("./useCases")

router.get("/user", user)
router.get("/recipe", recipe)

module.exports = router