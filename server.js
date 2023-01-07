//Import dependencies
const express = require("express")
const cors = require("cors")

//Import JSON files
const projects = require("./projects.json")
const about = require("./about.json")

//Create app object
const app = express()

//Set up middleware
app.use(cors())

//Home route
app.get("/", (req, res) => {
  res.send("Hello World")
})

//Projects route
app.get("/projects", (req, res) => {
  //Send projects via JSON
  res.json(projects)
})

//About route
app.get("/about", (req, res) => {
  //Send projects via JSON
  res.json(about)
})

const PORT = process.env.PORT || 4002

//Server listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
