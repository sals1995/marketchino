
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://marketchino:marketchino2022@cluster0.swvty.mongodb.net/marketchino?retryWrites=true&w=majority").then(() => {
    console.log("connect db");
}).catch(err => { console.log(err); })