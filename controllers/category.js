const categoryCollection = require("../models/categorysModel")
const SingleFile = require("../models/singleFileModel")
const fileSizeFormatter = (bytes, decimal) => {
    if (bytes === 0) {
        return '0 Bytes';
    }
    const dm = decimal || 2;
    const sizes = ['Bytes', 'KB', 'MB'];
    const index = Math.floor(Math.log(bytes) / Math.log(1000));
    return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + ' ' + sizes[index];

}
exports.create = (req, res) => {
    console.log(req.file)
    // console.log(req.body)
    // var body=JSON.stringify( req.body)
    var img={
        fileName: req.file.originalname,
        filePath: req.file.path,
        fileType: req.file.mimetype,
        fileSize: fileSizeFormatter(req.file.size, 2)
    }
    const singleFiles = new SingleFile({
        ...img
    });
    singleFiles.save();
    console.log(body);
    var newcategory = new categoryCollection({
        name: req.body.name,
        nameAr: req.body.nameAr,
        subCategories:body.subCategories,
        image: img,
    })

    newcategory.save().then(data => {
        // console.log("done", data);
        res.send(data)
    }).catch(err => { res.send(err) })

}

exports.all = (req, res) => {
    let limit = +req.query.limit || 0;
    let skip = +req.query.skip || 0;
    
    categoryCollection.find({}, (err, data) => {
        if (err) return next(err.message);
        res.send(data)
    }).limit(limit).skip(skip)
}

exports.update = (req, res) => {
    categoryCollection.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, data) => {
        // console.log(data);
        if (err) res.send(err)
        res.send(["category has been updated...",data])
    })
}

exports.deleteById = (req, res) => {
    categoryCollection.findOneAndDelete(req.params.id, (err, data) => {
        if (!data) res.send("can't find id " + req.params.id)
        if (err) res.send(err)
        res.send(["category has been deleted...", data])
    })
}