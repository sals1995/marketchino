
const mongoose = require("mongoose")
const {Schema} =require("mongoose")
  const productSchema = new Schema({
    name: // String is shorthand for {type: String} 
     {
        type: String,
        required:[true,"must send name"],
        unique:true,
      },
      description: String,
    additionalDes: Schema.Types.Mixed,
    price:Number,
    countInStock:Number,
    images:[String],
    category:String,
    subCategories:[String],
    rating:{type:Number,default:0}
  },{timestamps:true});
 

  module.exports= mongoose.model("product",productSchema)