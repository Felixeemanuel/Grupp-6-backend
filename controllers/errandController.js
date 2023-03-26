const router = require('express').Router()
const errandSchema = require('../schemas/errandSchema')
const errandModel = require('../models/errandModel')


router.post('/', errandModel.createNewErrand)   //POST på errands/ med JSON "email": "x", "subject": "x","message": "x"

router.get('/', errandModel.getAllErrands)  //GET på errands/

router.put('/:id', errandModel.updateErrand) // PUT på errands/id med JSON: "status": 1/2/3

router.delete('/:id', errandModel.deleteErrand)

module.exports = router