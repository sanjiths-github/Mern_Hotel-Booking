import express from "express";
import dotenv from "dotenv";


import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import connect from "./config/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express()
dotenv.config()

connect()

//middleware
app.use(cookieParser())
app.use(cors())
app.use(express.json())

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });
  

app.listen(8000, () => {
console.log("connect to backend")

})