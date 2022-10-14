export default function Home() {
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
                <img id="frontImage" src="/img_resources/violetRay.png" />
            </div>

            <div className="section2">
                <div id="line">{"   "}</div>
                <div id="text">
                    <p>
                        Based on P5JS, the [WrongEngine] of W/I has 9 algorithms
                        - 6 distortions and 3 blenders:
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
                        play with the parameters of each individual algorithm
                        for an infinite variety of results!
                    </p>
                </div>
                <img src="/img_resources/section2.png" />
            </div>
            <div className="section3">
                <img src="/img_resources/section3a.png" />

                <p>
                    RANDOM PUBLIC DOMAIN IMAGE MOSH
                    <br />
                    <br /> Wrong Image RPDIM automatically selects any number of
                    images from public domain sources. Generate a whole NFT
                    collection with one click.
                </p>
            </div>
            <div className="section4">
                <img id="footerImg" src="/img_resources/section4.png" />
                <h1>W R O N G / I M A G E</h1>
            </div>
            <p id="copyright">STEFANO ALTAVISTA 2022 &copy;</p>
        </div>
    );
}
