const errandSchema = require('../schemas/errandSchema')
const errandModel = require('../models/errandModel')

const router = require('express').Router()

router.post('/', errandModel.createNewErrand)

router.get('/', errandModel.getAllErrands)


module.exports = router