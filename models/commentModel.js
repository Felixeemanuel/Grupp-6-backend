const Comment = require("../schemas/commentSchema");
const Errand = require("../schemas/errandSchema");

exports.getAllComments = (req, res) => {
    Comment.find()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((error) => {
            res.status(400).json({
                message: "Unable to get comments",
            });
        });
};

exports.createNewComment = (req, res) => {
    const { caseId, email, message } = req.body;

    if (!caseId || !email || !message) {
        return res.status(400).json({ message: "Fields cannot be empty" });
    }

    Comment.create({ caseId, email, message })
        .then((newComment) => {
            Errand.findById(caseId).then((caseToUpdate) => {
                caseToUpdate.comment.push(newComment._id);
                caseToUpdate.save().then(() => {
                    res.status(200).json(caseToUpdate)
                });
            });
        })
        .catch((error) => {
            res.status(400).json({ message: "Unable to create case" });
        });
};
exports.deleteComment = (req, res) => {
    Comment.findByIdAndDelete(req.params.id)
        .then((data) => {
            if (!data) {
                res.status(404).json({
                    message: "Could not find that Comment",
                });
            }

            res.status(200).json({ id: data._id });
        })
        .catch((err) => {
            res.status(500).json({
                message: "Something went wrong when deleting the Comment",
                err: err.message,
            });
        });
};
