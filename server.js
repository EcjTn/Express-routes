const express = require("express");
const app = express()

app.get("/", (req, res) => {
    res.json({"message": "Hello Main"});
})

const userRoute = require("./user/users")

app.use("/users", userRoute)

app.listen(8000)
