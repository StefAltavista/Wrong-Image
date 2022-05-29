import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { accountCheckIn, accountCheckOut } from "../redux/account/slice.js";

//not enabled yet
//import { useEthers } from "@usedapp/core";

export default function Log_In() {
    const [toggleSettings, setToggleSettings] = useState(false);
    const dispatch = useDispatch();
    const account = useSelector((state) => state.account);
    const eth = window.ethereum;
    //const { deactivate } = useEthers();

    useEffect(() => {
        if (eth) {
            eth.on("connect", () => {
                var connected = eth.isConnected();
                if (connected) {
                    console.log("eth:", eth);

                    eth.request({ method: "eth_accounts" })
                        .then((accounts) => {
                            dispatch(accountCheckIn(accounts[0]));
                            console.log();
                        })
                        .catch((err) => {
                            console.error(err);
                        });
                }
            });

            eth.on("accountsChanged", (accounts) => {
                console.log("Account Changed");
                if (eth._state.isConnected) {
                    dispatch(accountCheckIn(accounts[0]));
                }
            });

            eth.on("disconnect", () => {
                dispatch(accountCheckOut());
            });
        } else {
            console.log("no Metamask installed");
        }
    }, []);

    async function getAccount() {
        const accounts = await eth.request({
            method: "eth_requestAccounts",
        });
        dispatch(accountCheckIn(accounts[0]));
    }
    function disconnect() {
        //deactivate();
        dispatch(accountCheckOut());
    }
    function settings() {
        setToggleSettings(!toggleSettings);
    }
    return (
        <div>
            {!account.wallet && (
                <button className="connectWallet" onClick={getAccount}>
                    Connect Wallet
                </button>
            )}
            {account.wallet && (
                <div>
                    <button className="accountButton" onClick={settings}>
                        {account.wallet.substring(0, 6) + "..."}
                    </button>
                    {toggleSettings && (
                        <div id="settings">
                            <p>Account</p>
                            <p onClick={disconnect}>Disconnect</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
