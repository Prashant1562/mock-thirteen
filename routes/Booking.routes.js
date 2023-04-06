const express = require("express")
const {BookingModel} = require("../models/Booking.model")

const bookingRouter = express.Router()

bookingRouter.get("/", async(req,res)=> {
    const notes = await BookingModel.find()
    res.send(notes)
})

bookingRouter.post("/appointments", async(req,res)=> {
    const payload = req.body
    const note = new BookingModel(payload)
    await note.save()
    res.send("Appointment Created")
})

module.exports = {
    bookingRouter
}