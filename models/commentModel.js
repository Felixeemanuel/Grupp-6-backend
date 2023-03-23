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

    Errand.findById(caseId)
        .then(() => {
            Comment.create({ caseId, email, message })
                .then((data) => {
                    res.status(201).json(data);
                })
                .catch((error) => {
                    res.status(400).json({ message: "Unable to create case" });
                });
        })
        .catch((error) => {
            res.status(400).json({
                message: "Case does not exist in errand collection",
            });
        });
};
