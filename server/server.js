const express = require("express");
const app = express();
const compression = require("compression");
const path = require("path");
const fs = require("fs");
// set up multer
const multer = require("multer");
const { uploadFile } = require("./uploadFile");
const { uploadMetadata } = require("./uploadMetadata");

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
app.use(express.json());

app.use(compression());

app.use(express.static(path.join(__dirname, "..", "client", "public")));

app.post("/api/upload_file", uploader.single("file"), async (req, res) => {
    let link = await uploadFile(req, res);
    res.json(link);
});
app.post("/api/upload_metadata", async (req, res) => {
    console.log("UPLOAD META _BODY:", req.body);
    let response = await uploadMetadata(JSON.stringify(req.body));

    res.json(response);
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.listen(process.env.PORT || 5001, function () {
    console.log("Listening port 5001");
});
