import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function WalletGallery() {
    const [wrongGallery, setWrongGallery] = useState();
    const [chain, setChain] = useState("ethereum");
    const [elseGallery, setElseGallery] = useState();
    const { walletAddress } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("/api/walletGallery", {
            headers: { "content-type": "application/json" },
            method: "POST",
            body: JSON.stringify({ walletAddress }),
        })
            .then((res) => res.json())
            .then(async (wrongs) => {
                if (!wrongs) {
                    setWrongGallery(false);
                } else if (!wrongs[0]) {
                    setWrongGallery(false);
                } else {
                    let promises = wrongs.map((x) => {
                        let url =
                            x.metadata_url.replace("ipfs", "http") +
                            ".ipfs.dweb.link";
                        return fetch(url).then((res) => res.json());
                    });
                    let metadata = await Promise.all([...promises]);
                    let unify = [];
                    wrongs.forEach(
                        (x, idx) => (unify[idx] = { ...metadata[idx], ...x })
                    );
                    setWrongGallery(unify);
                }
            });

        fetch("/api/getElsedNft", {
            headers: { "content-type": "application/json" },
            method: "POST",
            body: JSON.stringify({
                walletAddress,
                type: "owned",
                chain: chain,
            }),
        })
            .then((res) => res.json())
            .then(async (found) => {
                if (!found) {
                    setElseGallery(false);
                } else if (!found[0]) {
                    setElseGallery(false);
                } else {
                    if (chain == "polygon") {
                        found.map((x) => {
                            if (x.nft.metadata_url.startsWith("ipfs")) {
                                if (!x.nft.metadata_url.endsWith("json")) {
                                    x.nft.metadata_url =
                                        x.nft.metadata_url + ".ipfs.dweb.link";
                                }
                            }
                            fetch(x.nft.metadata_url)
                                .then((match) => match.json())
                                .then((poly) => {
                                    setElseGallery([poly]);
                                });
                        });
                    } else {
                        found[0].error
                            ? setElseGallery(false)
                            : setElseGallery(found);
                    }
                }
            });
    }, [walletAddress, chain]);

    const getElse = (type) => {
        fetch("/api/getElseNft", {
            headers: { "content-type": "application/json" },
            method: "POST",
            body: JSON.stringify({ walletAddress, type }),
        })
            .then((res) => res.json())
            .then((found) => {
                if (!found) {
                    setElseGallery(false);
                } else if (!found[0]) {
                    setElseGallery(false);
                } else setElseGallery(found);
            });
    };

    const goToNft = (nft) => {
        navigate(`../nft/${nft.id}`, { state: { nft } }), [navigate];
    };
    function swtichChain(e) {
        setChain(e.target.value);
    }
    return (
        <div id="gallery">
            <h2>
                <p> Account: _{walletAddress}</p>
            </h2>
            <nav>
                <div>
                    <p onClick={() => getElse("owned")}>Owned</p>
                </div>
                <div>
                    <p onClick={() => getElse("created")}>Created</p>
                </div>
                <div>
                    <p>liked</p>
                </div>
                <div>
                    Chain
                    <select onChange={swtichChain}>
                        <option value="ethereum">ethereum</option>
                        <option value="polygon">polygon</option>
                    </select>
                </div>
            </nav>
            <div id="fromWrong" className="nfts">
                <p>From Wrong/Image</p>
                {wrongGallery ? (
                    <div id="nfts">
                        {wrongGallery.map((nft) => {
                            return (
                                <div
                                    id="displayNft"
                                    key={nft.id}
                                    onClick={() => goToNft(nft)}
                                >
                                    <p>{nft.name}</p>
                                    <img src={nft.image} />
                                    <p className="description">
                                        {nft.description.substring(0, 50) +
                                            "..."}
                                    </p>
                                    {nft.minted ? (
                                        <p id="mint" className="minted">
                                            minted
                                        </p>
                                    ) : (
                                        <p id="mint" className="notMinted">
                                            not minted
                                        </p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <p>Nothing here yet</p>
                )}
            </div>
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
            </div>
        </div>
    );
}
