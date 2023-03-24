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



exports.updateErrand = (req,res) => {
    const { status } = req.body;
    if(!status){
        res.status(400).json({
            message: 'You need to enter a new status'
        })
        return
    }
    Errand.findByIdAndUpdate(req.params.id, { status }, {new: true})
    .then(errand => {
        if(!errand){
            res.status(404).json({
                message: 'Can not find that errand'
            })
            return
        }
    
        res.status(200).json(errand)
    })
    .catch(err =>{
        res.status(500).json({
            message: 'Somethinf went wrong when updating the errand',
            err: err.message
        })
    })
}