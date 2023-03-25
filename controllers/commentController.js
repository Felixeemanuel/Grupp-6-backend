const commentModel = require("../models/commentModel");

const router = require("express").Router();

router.get("/", commentModel.getAllComments);   //GET på comments/
router.post("/", commentModel.createNewComment); //POST på comments/ med JSON "caseID": "x", "email": "x","message": "x"

module.exports = router;
