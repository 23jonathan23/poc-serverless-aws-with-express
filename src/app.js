const cors = require('cors')
const bodyParser = require('body-parser')
const app = require('express')()

app.use(cors())
app.use(bodyParser.json())

const { user, recipe } = require("./useCases")
app.get("/user", user)
app.get("/recipe", recipe)

module.exports = app;
