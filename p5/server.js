const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));
app.get("/", (req, res) => {
    res.sendFile("/Users/Stef/Desktop/Wrong_image/public/index.html");
});

app.listen(5000, () => console.log("PORT 5000"));
