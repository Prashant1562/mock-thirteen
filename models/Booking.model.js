const mongoose = require("mongoose")

const bookingSchema = mongoose.Schema({
    name: String,
    img: String,
    experience: String,
    location: String,
    Date: Number,
    slots: Number,
    fee: Number
})

const BookingModel = mongoose.model("booking",bookingSchema)

module.exports={
    BookingModel
}