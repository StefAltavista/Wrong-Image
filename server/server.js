const express = require("express");
const app = express();
const compression = require("compression");
const path = require("path");
const db = require("../database/db.js");
const nft = require("./NFTPortApi");
const IPFS = (...args) =>
    import("ipfs-core").then(({ default: ipfs }) => ipfs(...args));

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

//set-up middlewware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(compression());
app.use(express.static(path.join(__dirname, "..", "client", "public")));

app.post("/api/upload_file", uploader.single("file"), async (req, res) => {
    let link = await uploadFile(req, res);
    res.json(link);
});
app.post("/api/upload_metadata", async (req, res) => {
    let response = await uploadMetadata(JSON.stringify(req.body));
    res.json(response);
});
app.post("/api/insertNft", (req, res) => {
    // console.log(req);
    db.insertNft(req.body).then(({ rows }) => res.json(rows));
});
app.post("/api/getNft", (req, res) => {
    //console.log(req);
    db.getNft(req.body).then(({ rows }) => res.json(rows));
});

app.get("/api/wrongnfts", (req, res) => {
    db.selectAll().then(({ rows }) => res.json(rows));
});
app.post("/api/walletGallery", (req, res) => {
    //console.log(req.body);
    db.selectWallet(req.body).then(({ rows }) => {
        console.log(rows);
        res.json(rows);
    });
});
app.post("/api/getElsedNft", (req, res) => {
    //console.log("SERVER", req.body);
    nft.getNfts(req).then((result) => {
        console.log("from Server", result);
        res.json(result);
    });
});
app.post("/api/mint", async (req, res) => {
    console.log("SERVER imgID:", req.body.id);
    db.setMinted(req.body.id);
    // res.json({ response: "OK", chain: "rinkeby" });
    // MINTING ENABLED!
    const response = await nft.mintNft(req);
    if (response.response === "OK") {
        db.setMinted(req.body.id);
        db.saveTransaction(req.body.id, response.transaction_external_url);
    }

    console.log(response);
    res.json(response);
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.listen(process.env.PORT || 5001, function () {
    console.log("Listening port 5001");
});
