const NFTPORT = require("../config.json");
const fetch = (...args) =>
    import("node-fetch").then(({ default: fetch }) => fetch(...args));

const getNfts = (req) => {
    let url;
    if (req.body.type == "created") {
        url = `https://api.nftport.xyz/v0/accounts/creators/${req.body.walletAddress}?chain=${req.body.chain}`;
    }
    if (req.body.type == "owned") {
        url = `https://api.nftport.xyz/v0/accounts/${req.body.walletAddress}?chain=${req.body.chain}`;
    }
    return fetch(url, {
        headers: {
            Authorization: NFTPORT.NFT_PORT_KEY,
            "Content-Type": "application/json",
        },
        method: "GET",
    })
        .then((result) => result.json())
        .then(async (arr) => {
            console.log("from method arr:", arr);

            if (arr.nfts[0]) {
                let promises = arr.nfts.map((x, idx) => {
                    url = `https://api.nftport.xyz/v0/nfts/${x.contract_address}/${x.token_id}?chain=${req.body.chain}`;
                    if (idx < 2) {
                        return fetch(url, {
                            headers: {
                                Authorization: NFTPORT.NFT_PORT_KEY,
                                "Content-Type": "application/json",
                            },
                            method: "GET",
                        }).then((res) => res.json());
                    } else return;
                });
                let nfts = await Promise.all([promises[0], promises[1]]);
                console.log("from method nfts:", nfts);
                return nfts;
            } else return null;
        })
        .catch((err) => {
            console.log(err);
            return null;
        });
};

module.exports = {
    getNfts,
};
