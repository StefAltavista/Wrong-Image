import { useState } from "react";
import { useDispatch } from "react-redux";
import { loaded, loading } from "../redux/loading/slice";

export default function MintButton(props) {
    const dispatch = useDispatch();
    const name = props.name;
    const wallet = props.wallet;
    const metadata_url = props.metadata;
    const id = props.id;
    const [getInfo, setGetInfo] = useState();
    const [response, setResponse] = useState();
    console.log("imageID=", props.id);
    const mintInformations = (e) => {
        e.preventDefault();
        setGetInfo(false);
        const contractAddress = e.target.contract.value;
        const contractChain = e.target.chain.value;
        const walletAddress = e.target.wallet.value;
        const reqBody = {
            contractAddress,
            contractChain,
            walletAddress,
            metadata_url,
            id,
        };
        const options = {
            headers: { "content-type": "application/json" },
            method: "POST",
            body: JSON.stringify(reqBody),
        };
        dispatch(loading());
        fetch("/api/mint", options)
            .then((r) => r.json())
            .then((res) => {
                dispatch(loaded());
                setResponse(res);
            });
    };

    return (
        <>
            <button id="mintButton" onClick={() => setGetInfo(true)}>
                Mint
            </button>
            {getInfo && (
                <form
                    id="mintInfo"
                    onSubmit={mintInformations}
                    onReset={() => setGetInfo(false)}
                >
                    <p>
                        Contract Address:{" "}
                        <input
                            type="text"
                            name="contract"
                            defaultValue="0x1F6Bd8b821994a2f8458C588D83626d2F3421926"
                        ></input>{" "}
                        Contract Chain:{" "}
                        <input
                            type="text"
                            name="chain"
                            defaultValue="rinkeby"
                        ></input>
                    </p>
                    <p>
                        Minto to Wallet:{" "}
                        <input
                            type="text"
                            defaultValue={wallet}
                            name="wallet"
                        ></input>
                    </p>
                    <button type="submit">Submit</button>
                    <button type="reset">Abort</button>
                </form>
            )}
            {response && response.response == "OK" && (
                <div id="congratulations">
                    <p>Congratulations!</p>
                    <p>
                        {name} is now an NFT on the {response.chain} chain!
                    </p>
                    <p>Response: {JSON.stringify(response, "", 4)}</p>
                    <p id="transactionLink">
                        <a href={response.transaction_external_url}>
                            SEE TRANSACTION
                        </a>
                    </p>
                </div>
            )}
        </>
    );
}
