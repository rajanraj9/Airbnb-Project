const express = require("express");
const router = express.Router();


//index- user
router.get("/", (req, res) => {
    res.send("GET for users");
});
//show - user
router.get("/:id", (req, res) => {
    res.send("GET for users id");
});
//POST - user
router.post("/", (req, res) => {
    res.send("POST for users");
});

//DELETE - user
router.delete("/", (req, res) => {
    res.send("DELETE for users");
});

module.exports = router;