const app = require("express");
const router = app.Router();


let name = ["EcjTaneo"]
let version = "1.4.0"

router.get("/", (req, res) => {
    res.json({"message": name});
})

router.get("/version", (req, res) => {
    res.send(`version: ${version}`);
})





module.exports = router;
