import { useEffect, useState } from "react";

export default function MyGallery() {
    const [account, setAccount] = useState();

    async function getAccount() {
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        let account = accounts[0];
        setAccount(account);
    }
    return (
        <>
            <button className="enableEthereumButton" onClick={getAccount}>
                Enable Ethereum
            </button>
            <h2>
                Account: <span className="showAccount">{account}</span>
            </h2>
        </>
    );
}
