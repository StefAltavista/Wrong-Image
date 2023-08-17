import React from "react";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MintButton from "./mintButton.js";
import WorkinProgress from "./WorkinProgress.js";
// import * as IPFS from "ipfs-core";

export default function Nft() {
    const { id } = useParams();
    const [imageID, setImageId] = useState(id);
    const [nft, setNft] = useState();
    const [meta, setMeta] = useState();
    const wallet = useSelector((state) => state.account.wallet);
    let url;

    useEffect(() => {
        // fetch("/api/getNft", {
        //     headers: { "content-type": "application/json" },
        //     method: "POST",
        //     body: JSON.stringify({ id }),
        // })
        //     .then((res) => res.json())
        //     .then((x) => {
        //         url =
        //             x[0].metadata_url.replace("ipfs", "http") +
        //             ".ipfs.dweb.link";
        //         fetch(url)
        //             .then((res) => res.json())
        //             .then((metadata) => {
        //                 setMeta(metadata);
        //                 console.log(metadata);
        //             });
        //         setNft(x[0]);
        //     });
    }, []);

    return (
        <>
            <WorkinProgress></WorkinProgress>
            {/* {nft && meta && (
                <div id="singleNft">
                    <div id="singleInfo">
                        <label>Name:</label>
                        <p> {meta.name}</p>
                        <label>Description:</label>
                        <p>{meta.description}</p>
                        <label>Mint State:</label>
                        {nft.minted ? (
                            <p id="yes">Minted</p>
                        ) : (
                            <p id="no">Not Minted</p>
                        )}
                        <label>Links:</label>
                        <p>
                            <a
                                href={nft.metadata_url}
                                rel="noreferrer"
                                target="_blank"
                            >
                                Metadata
                            </a>
                        </p>

                        {nft.creator === wallet ? (
                            <>
                                {" "}
                                <label>Owner</label>
                                <p> you</p>
                                {nft.minted ? (
                                    <button>Burn Nft</button>
                                ) : (
                                    <MintButton
                                        wallet={wallet}
                                        metadata={nft.metadata_url}
                                        id={imageID}
                                        name={meta.name}
                                    />
                                )}
                            </>
                        ) : (
                            <>
                                <label>Owner</label>
                                <p
                                    id="copyToClipboard"
                                    onClick={() =>
                                        navigator.clipboard.writeText(
                                            nft.creator
                                        )
                                    }
                                >
                                    {" "}
                                    {nft.creator.substring(0, 6) + "..."}
                                    <p className="hidden">copy to clipboard</p>
                                </p>
                            </>
                        )}
                    </div>
                    <div id="singleImg">
                        <img src={nft.image_url}></img>
                    </div>
                </div>
            )} */}
        </>
    );
}
