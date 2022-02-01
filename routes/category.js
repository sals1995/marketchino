var express = require("express")

const router = express.Router()


const mongoose = require("mongoose")

const categoryControllers=require("../controllers/category")
const path =require("path")
const upload=require("../models/multerHelper")

router.post('/add',express.static( path.join(__dirname, "images")),upload.single('file'),categoryControllers.create)
router.get('/', categoryControllers.all)
router.put('/:id', categoryControllers.update)
router.delete('/:id', categoryControllers.deleteById)

module.exports = router