const Errand = require('../schemas/errandSchema')

exports.createNewErrand = (req, res) => {

    const { email, subject, message } = req.body

    if(!email || !subject || !message) {
        res.status(400).json({
            message: 'You need to enter all the fields'
        })
        return
    }

    Errand.create({ email, subject, message })
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(500).json({
                message: 'Something went wrong when creating the errand',
                err: err.message
            })
        })
}

exports.getAllErrands = (req, res) => {

    Errand.find()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json({
                message: 'Something went wrong when fetching all errands'
            })
        })
}
