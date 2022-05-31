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
const selectAll = () => {
    return db.query(`SELECT * FROM nfts ORDER BY created_at DESC`);
};

const insertNft = ({ creator, image_URL, metadata_URL }) => {
    const minted = false;
    return db.query(
        `INSERT INTO nfts(creator,image_URL,metadata_URL,minted) VALUES ($1,$2,$3,$4)`,
        [creator, image_URL, metadata_URL, minted]
    );
};
const setMinted = (id) => {
    return db.query(`UPDATE nfts SET minted=true WHERE id=$1`, [id]);
};

const getNft = ({ id }) => {
    return db.query(`SELECT * FROM nfts WHERE id=$1`, [id]);
};

const selectWallet = ({ walletAddress }) => {
    return db.query(
        `SELECT * FROM nfts WHERE creator=$1 ORDER BY created_at DESC `,
        [walletAddress]
    );
};

module.exports = { selectAll, insertNft, selectWallet, getNft, setMinted };
