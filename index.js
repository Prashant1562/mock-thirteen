const express = require("express")
const {connection} = require("./db")
const {userRouter} = require("./routes/User.routes")
const {bookingRouter} = require("./routes/Booking.routes")
const {authenticate} = require("./middlewares/authenticate.middleware")

const app = express()
const cors = require("cors")
app.use(cors({
    origin:"*"
}))
app.use(express.json())

app.get("/",(req,res) => {
    res.send("Home Page")
})

app.use("/users",userRouter)
app.use(authenticate)
app.use("/booking",bookingRouter)

app.listen(8080,async ()=> {
    try {
        await connection
        console.log("Conneted to DB")
    } catch (error) {
        console.log(error.message)
    }
    console.log("Server is running at port 8080");
})
