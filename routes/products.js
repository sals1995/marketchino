var express = require("express")

const router = express.Router()


const mongoose = require("mongoose")

const productsControllers=require("../controllers/products")
const path =require("path")
const upload=require("../models/multerHelper")

router.post('/add',express.static( path.join(__dirname, "images")),upload.array('files'),productsControllers.create)
router.get('/', productsControllers.all)
router.put('/:id', productsControllers.update)
router.delete('/:id', productsControllers.deleteById)

module.exports = router