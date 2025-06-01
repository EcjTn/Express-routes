const express = require("express");
const app = express()

app.get("/", (req, res) => {
    res.json({"message": "Hello Main"});
})

app.get("/main", (req, res) => {
    res.send("this is main");
})

const userRoute = require("./user/users")

app.use("/users", userRoute)

//app.listen(8000)
