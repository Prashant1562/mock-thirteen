const mongoose = require("mongoose")

const connection = mongoose.connect('mongodb+srv://mongoatlas:mongoatlas@cluster0.1p8v74i.mongodb.net/hospital?retryWrites=true&w=majority')

module.exports={
    connection
}