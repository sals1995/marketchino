
const mongoose = require(`mongoose`)
const categorySchema = new mongoose.Schema({
    images: {
        type: String
    },
    name: {
        type: String
    },
    nameAr: {
        type: String,
    },
    subCategories: [{
        name: { type: String },
        nameAr: { type: String },
        image: { type: String }
    }],
    image:{type:Object}
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('category', categorySchema);