const commentModel = require("../models/commentModel");

const router = require("express").Router();

router.get("/", commentModel.getAllComments);
router.post("/", commentModel.createNewComment);

module.exports = router;
