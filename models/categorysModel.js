
const mongoose = require(`mongoose`)
const categorySchema = new mongoose.Schema({ 
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