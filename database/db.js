/* eslint-disable indent */
const spicedPg = require("spiced-pg");

let db;
//SETUP
if (process.env.DATABASE_URL) {
    // it means that the app runs online
    db = spicedPg(process.env.DATABASE_URL);
} else {
    // the app runs locally
    // const {
    //     DATABASE_USER,
    //     DATABASE_PASSWORD,
    //     DATABASE_NAME,
    // } = require("./secrets.json");
    db = spicedPg("postgres:postgres:postgres@localhost:5432/wrong");
    // console.log(`[db] Connecting to: ${DATABASE_NAME}`);
    console.log(`[db] Connecting to: local`);
}
const selectAll = () => db.query(`SELECT * FROM nfts`);
const insertNft = ({ creator, image_URL, metadata_URL }) =>
    db.query(
        `INSERT INTO nfts(creator,image_URL,metadata_URL) VALUES ($1,$2,$3)`,
        [creator, image_URL, metadata_URL]
    );
module.exports = { selectAll, insertNft };
