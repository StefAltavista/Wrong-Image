import { useEffect, useState } from "react";
export default function Home() {
    const [random, setRandom] = useState("");
    const [recent, setRecent] = useState("");

    useEffect(() => {
        //fetch imgs from db
        fetch("/api/wrongnfts")
            .then((res) => res.json())
            .then((imgs) => {
                console.log(imgs);

                setRandom(imgs[2].image_url);
            });
    }, []);

    return (
        <div id="home">
            <div id="title">
                <p>Generative Art / Image manipulator</p>
                <p> NFT Minter</p>
            </div>
            <div className="section">
                <div>
                    <p>{">"} Destructure images </p>
                    <p>{">"} Store in decentralized database</p>
                    <p>{">"} Mint single NFT or collections </p>
                </div>
                <img src={random} />
            </div>
            <div className="section2">
                <p>
                    Based on P5JS, the [WrongEngine] of W/I has 9 algorithms - 6
                    distortions and 3 blenders:
                </p>
                <div id="lists">
                    <ul>
                        <li>{">"} Collateral</li>
                        <li>{">"} Destructive</li>
                        <li>{">"} Crystal</li>
                        <li>{">"} Liquify</li>
                        <li>{">"} Nylon</li>
                        <li>{">"} Specter</li>
                    </ul>
                    <ul>
                        <li>{">"} Mosh</li>
                        <li>{">"} Ripper</li>
                        <li>{">"} Stainer</li>
                    </ul>
                </div>
                <p>
                    Feed any kind of image into the distortions or layer
                    multiple files using the blenders.
                    <br />
                    play with the parameters of each individual algorithm for an
                    infinite variety of results!
                </p>
                <img src={recent} />
            </div>
            <div className="section">
                <img src="" />
                <img src="" />
                <img src="" />
                <p>Random public domain image mosh</p>
                <p>
                    Wrong Image RPDIM automatically selects any number of images
                    from public domain sources. Generate a whole NFT collection
                    with one click.
                </p>
            </div>
        </div>
    );
}
