
const express = require('express');
const upload = require('../models/multerHelper');
const { multipleFileUpload, getallMultipleFiles} = require('../controllers/uploadFile');
const router = express.Router();

router.post('/multipleFiles', upload.array('images'), multipleFileUpload);
router.get('/getMultipleFiles', getallMultipleFiles);


module.exports = {
    routes: router
}