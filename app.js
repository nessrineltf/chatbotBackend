const { Connect } = require("./config/connectDB");
require("dotenv").config();
const userRouter= require("./routes/userRouter");
const profileRouter=require("./routes/profileRouter");
const chatRoomRoute=require("./routes/chatRoomRouter");


express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))
exports.app = app;

// router 
app.use("/api",[userRouter,profileRouter] );
app.use("/api/chatroom", chatRoomRoute); 

// connect to data base 
Connect();

// running server
const PORT = process.env.PORT || 3009;
app.listen(PORT, () =>
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode  on port ${PORT}`
  )
);
