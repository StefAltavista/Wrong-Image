import React from "react";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loading, loaded } from "../redux/loading/slice";
import Loading from "./loading";
export default function WalletGallery() {
    const [wrongGallery, setWrongGallery] = useState();
    const [chain, setChain] = useState("polygon");
    const [elseGallery, setElseGallery] = useState();
    const { walletAddress } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const load = useSelector((state) => state.loading.busy);

    useEffect(() => {
        if (
            walletAddress &&
            walletAddress != "undefined" &&
            walletAddress != "null"
        ) {
            dispatch(loading());
            fetch("/api/walletGallery", {
                headers: { "content-type": "application/json" },
                method: "POST",
                body: JSON.stringify({ walletAddress, type: "owned", chain }),
            })
                .then((res) => res.json())
                .then(async (wrongs) => {
                    console.log("received:", wrongs);
                    if (!wrongs) {
                        setWrongGallery(false);
                    } else if (!wrongs[0]) {
                        setWrongGallery(false);
                    } else {
                        let info = wrongs.map((x) => {
                            console.log(x);
                            if (x.error) {
                                return;
                            }
                            return x.nft.metadata;
                            // console.log("front single", x);
                            //     if (x) {
                            //         let url =
                            //             x.metadata_url.replace("ipfs", "http") +
                            //             ".ipfs.dweb.link";
                            //         return new Promise((res, rej) => {
                            //             fetch(url)
                            //                 .then((res) => res.json())
                            //                 .then((response) => res(response));
                            //         });
                            //     }
                            //     return;

                            // let metadata = await Promise.all([...promises]);
                            //    return x.metadata;
                        });

                        // wrongs.forEach(
                        //     (x, idx) =>
                        //         (unify[idx] = { ...metadata[idx], ...x })
                        // );
                        setWrongGallery([...info]);
                        dispatch(loaded());
                    }
                });
        }

        // fetch("/api/getElsedNft", {
        //     headers: { "content-type": "application/json" },
        //     method: "POST",
        //     body: JSON.stringify({
        //         walletAddress,
        //         type: "owned",
        //         chain: chain,
        //     }),
        // })
        //     .then((res) => res.json())
        //     .then(async (found) => {
        //         if (!found) {
        //             setElseGallery(false);
        //         } else if (!found[0]) {
        //             setElseGallery(false);
        //         } else {
        //             if (chain == "polygon") {
        //                 found.map((x) => {
        //                     if (x.nft.metadata_url.startsWith("ipfs")) {
        //                         if (!x.nft.metadata_url.endsWith("json")) {
        //                             x.nft.metadata_url =
        //                                 x.nft.metadata_url + ".ipfs.dweb.link";
        //                         }
        //                     }
        //                     fetch(x.nft.metadata_url)
        //                         .then((match) => match.json())
        //                         .then((poly) => {
        //                             setElseGallery([poly]);
        //                         });
        //                 });
        //             } else {
        //                 found[0].error
        //                     ? setElseGallery(false)
        //                     : setElseGallery(found);
        //             }
        //         }
        //     });
    }, [walletAddress, chain]);

    // GET NFT FROM BLOCKCHAIN
    // WORKING
    // NOT AVAILABLE IN THIS VERSION

    // const getElse = (type) => {
    //     fetch("/api/getElseNft", {
    //         headers: { "content-type": "application/json" },
    //         method: "POST",
    //         body: JSON.stringify({ walletAddress, type }),
    //     })
    //         .then((res) => res.json())
    //         .then((found) => {
    //             if (!found) {
    //                 setElseGallery(false);
    //             } else if (!found[0]) {
    //                 setElseGallery(false);
    //             } else setElseGallery(found);
    //         });
    // };

    const goToNft = (nft) => {
        navigate(`../nft/${nft.id}`, { state: { nft } }), [navigate];
    };
    function swtichChain(e) {
        setChain(e.target.value);
    }
    return (
        <div id="gallery">
            {load && <Loading></Loading>}
            <h2>
                <p> Account: _{walletAddress}</p>
            </h2>
            <nav>
                <div>
                    <p
                    // onClick={() => getElse("owned")}
                    >
                        Owned
                    </p>
                </div>
                <div>
                    <p
                    // onClick={() => getElse("created")    }
                    >
                        Created
                    </p>
                </div>
                <div>
                    <p>liked</p>
                </div>
                <div>
                    Chain
                    <select onChange={swtichChain}>
                        <option value="polygon">polygon</option>
                        <option value="ethereum">ethereum</option>
                    </select>
                </div>
            </nav>
            <div id="fromWrong" className="nfts">
                <p>From Wrong/Image Database</p>
                {wrongGallery ? (
                    <div id="nfts">
                        {wrongGallery.map((nft, idx) => {
                            if (nft.name.includes("AIRDROP")) {
                                return null;
                            }
                            return nft ? (
                                <div
                                    id="displayNft"
                                    key={idx}
                                    onClick={() => goToNft(nft)}
                                >
                                    <p>{nft.name}</p>
                                    <img src={nft.image} />
                                    <p className="description">
                                        {nft.description &&
                                            nft.description.substring(0, 50) +
                                                "..."}
                                    </p>
                                    {nft.minted_by ? (
                                        <p id="mint" className="minted">
                                            minted
                                        </p>
                                    ) : (
                                        <p id="mint" className="notMinted">
                                            not minted
                                        </p>
                                    )}
                                </div>
                            ) : null;
                        })}
                    </div>
                ) : (
                    <p>Nothing here yet</p>
                )}
            </div>
            {/* 
            GET NFT FROM BLOCKCHAIN
            WORKING
            NOT AVAILABLE IN THIS VERSION
            
            <div id="fromElse" className="nfts">
                <p>From Anywhere Else</p>
                {elseGallery ? (
                    <div id="nfts">
                        {elseGallery.map((nft, idx) => {
                            return (
                                <>
                                    {chain == "ethereum" ? (
                                        <div
                                            id="displayNft"
                                            key={`else${nft.nft.token_id}`}
                                            onClick={() => goToNft(nft.nft)}
                                        >
                                            <img
                                                src={nft.nft.cached_file_url}
                                            />
                                            <p>{nft.contract.name}</p>
                                        </div>
                                    ) : (
                                        <div
                                            id="displayNft"
                                            className={`poly${idx}}`}
                                            key={`poly${idx}}`}
                                            onClick={() => goToNft(nft.nft)}
                                        >
                                            <img src={nft.image} />
                                            <p>{nft.name}</p>
                                        </div>
                                    )}
                                </>
                            );
                        })}
                    </div>
                ) : (
                    <p>Nothing here yet</p>
                )}
            </div> */}
        </div>
    );
}
