const ProductCollection = require("../models/productsModel")
const MultipleFile = require("../models/multipleFileModel")
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
    console.log(req.body)

    const filesPath = [];
    const filesArray = [];
    req.files.forEach(element => {
        const file = {
            fileName: element.originalname,
            filePath: element.path,
            fileType: element.mimetype,
            fileSize: fileSizeFormatter(element.size, 2)
        }
        filesArray.push(file);
        filesPath.push(element.path);
    });
    const multipleFiles = new MultipleFile({
        files: filesArray
    });
    multipleFiles.save();

    var newProduct = new ProductCollection({
        name: req.body.name,
        nameAr: req.body.nameAr,
        description: req.body.description,
        descriptionAr: req.body.descriptionAr,
        additionalDes: req.body.additionalDes,
        additionalDesAr: req.body.additionalDesAr,
        price: req.body.price,
        countInStock: req.body.countInStock,
        category: req.body.category,
        subCategories: req.body.subCategories,
        rating: req.body.rating,
        images: filesPath,
    })

    newProduct.save().then(data => {
        // console.log("done", data);
        res.send(data)
    }).catch(err => { res.send(err) })

}

exports.all = (req, res) => {
    let limit = +req.query.limit || 5;
    let skip = +req.query.skip || 0;

    ProductCollection.find({}, (err, data) => {
        if (err) res.send(err)
        res.send(data)
    }).limit(limit).skip(skip)

}
exports.update = (req, res) => {
    ProductCollection.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, data) => {
        // console.log(data);
        if (err) res.send(err)
        res.send(["Product has been updated...", data])
    })
}

exports.deleteById = (req, res) => {
    ProductCollection.findOneAndDelete(req.params.id, (err, data) => {
        if (!data) res.send("can't find id " + req.params.id)
        if (err) res.send(err)
        res.send(["Product has been deleted...", data])
    })
}

exports.byCategory = (req, res) => {
    let query = {}
    query.limit = +req.query.limit || 5;
    query.skip = +req.query.skip || 0;
    query.category = req.params.category
    query.subCategories = req.query.sub 
    console.log(query.subCategories);
    ProductCollection.find({ 
        category: query.category,
         ...query.subCategories ? { subCategories: query.subCategories} :{} }, (err, data) => {
        if (err) res.send(err)
        res.send(data)
    }).limit(query.limit).skip(query.skip)
}