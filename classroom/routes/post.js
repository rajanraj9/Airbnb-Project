const express = require("express");
const router = express.Router();


//POSTS
//index
router.get("/", (req, res) => {
    res.send("GET for posts");
});
//show 
router.get("/:id", (req, res) => {
    res.send("GET for posts id");
});
//POST 
router.post("/", (req, res) => {
    res.send("POST for posts");
});

//DELETE 
router.delete("/", (req, res) => {
    res.send("DELETE for posts");
});

module.exports = router;