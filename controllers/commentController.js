const router = require("express").Router();
const commentModel = require("../models/commentModel");


router.get("/", commentModel.getAllComments);   //GET på comments/
router.post("/", commentModel.createNewComment); //POST på comments/ med JSON "caseID": "x", "email": "x","message": "x"
router.delete('/:id', commentModel.deleteComment); // DELETE på comments/id
module.exports = router;
