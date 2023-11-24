const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/userDetails")
.then(() => {
    console.log("connection is successful");
})
.catch((e) => {
    console.log("No connection" + e);
})