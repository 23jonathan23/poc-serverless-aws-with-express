require("dotenv").config();
const cors = require('cors')
const bodyParser = require('body-parser')
const app = require('express')()

app.use(cors())
app.use(bodyParser.json())

const { validateToken } = require('./middleware')
app.use(validateToken)

const { user, recipe } = require("./useCases")
app.get("/user", user)
app.get("/recipe", recipe)

module.exports = app;
