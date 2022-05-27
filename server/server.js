const express = require("express");
const app = express();
const compression = require("compression");
const path = require("path");
// set up multer
const multer = require("multer");
const { uploadFile } = require("./uploadFile");

const uidSafe = require("uid-safe");
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, "uploads")); // null (if no err!)
    },
    filename: (req, file, callback) => {
        uidSafe(24).then((randomId) => {
            const fileName = `${randomId}${path.extname(file.originalname)}`; // null (if no err!)
            callback(null, fileName);
        });
    },
});
const uploader = multer({ storage });
app.use(express.urlencoded({ extended: false }));

app.use(compression());

app.use(express.static(path.join(__dirname, "..", "client", "public")));

app.post("/saveimage", uploader.single("file"), uploadFile, (req, res) => {
    res.json(req.file);
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.listen(process.env.PORT || 5001, function () {
    console.log("Listening port 5001");
});
