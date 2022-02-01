
const express = require('express');
const upload = require('../models/multerHelper');
const { multipleFileUpload, getallMultipleFiles} = require('../controllers/uploadFile');
const router = express.Router();
const path=require("path")
router.post('/',express.static( path.join(__dirname, "images")), upload.array('files'), multipleFileUpload);
router.get('/', getallMultipleFiles);


module.exports =router