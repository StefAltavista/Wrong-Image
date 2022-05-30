import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import * as IPFS from "ipfs-core";

export default function Nft() {
    const { id } = useParams();
    const [nft, setNft] = useState();
    const [meta, setMeta] = useState();
    let url;
    useEffect(() => {
        fetch("/api/getNft", {
            headers: { "content-type": "application/json" },
            method: "POST",
            body: JSON.stringify({ id }),
        })
            .then((res) => res.json())
            .then((x) => {
                url =
                    x[0].metadata_url.replace("ipfs", "http") +
                    ".ipfs.dweb.link";
                fetch(url)
                    .then((res) => res.json())
                    .then((metadata) => setMeta(metadata));

                setNft(x[0]);
            });
    }, []);

    return (
        <>
            {nft && meta && (
                <div>
                    <p>{meta.name}</p>
                    <img src={nft.image_url}></img>
                    <p>Description: {meta.description}</p>
                </div>
            )}
        </>
    );
}
