const express = require("express")
const app = express()
const mongoose = require("mongoose")
mongoose
  .connect(
    "mongodb+srv://MichaelWang:minecraft.@react-boilerplate-b0t8m.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err))

app.get("/", (req, res) => {
  res.send("hello world")
})

app.listen(5000)
