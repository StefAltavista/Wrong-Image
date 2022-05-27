const NFTPORT = require("./config.json");
const fs = require("fs");
const fetch = (...args) =>
    import("node-fetch").then(({ default: fetch }) => fetch(...args));
const FormData = require("form-data");

module.exports.uploadFile = (req, res, next) => {
    if (!req.file) {
        console.log("User didn't send any file");
        return res.sendStatus(500);
    }

    const { path } = req.file;
    console.log("path:", path);
    const form = new FormData();
    const fileStream = fs.createReadStream(path);
    form.append("file", fileStream);

    const options = {
        method: "POST",
        body: form,
        headers: {
            Authorization: NFTPORT.NFT_PORT_KEY,
        },
    };
    //console.log("uploadFile: ", options);

    fetch("https://api.nftport.xyz/v0/files", options)
        .then((response) => {
            return response.json();
        })
        .then((responseJson) => {
            // Handle the response
            console.log("IPFS RESPONSE: ", responseJson);
            next();
        });
};
