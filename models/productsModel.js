
const mongoose = require("mongoose")
const {Schema} =require("mongoose")
  const productSchema = new Schema({
    name:
     {
        type: String,
        required:[true,"must send name"],
        unique:true,
      },
      nameAr: 
     {
        type: String,
        required:[true,"must send name in arabic"],
        unique:true,
      },
      description: String,
      descriptionAr: String,
    additionalDes: Schema.Types.Mixed,
    additionalDesAr: Schema.Types.Mixed,
    price:Number,
    countInStock:Number,
    images:[String],
    category:String,
    subCategories:String,
    rating:{type:Number,default:0}
  },{timestamps:true});
 

  module.exports= mongoose.model("product",productSchema)