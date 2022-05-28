import { useSelector, useDispatch } from "react-redux";
import accountCheckIn from "./redux/account/slice.js";
import App from "./app";

export default function Log_In() {
    //const [account, setAccount] = useState();
    const dispatch = useDispatch();
    const account = useSelector((state) => state.account);

    async function getAccount() {
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        dispatch(accountCheckIn(accounts[0]));
    }
    return (
        <>
            <nav id="header">
                <h1>WRONG / IMAGE</h1>
            </nav>
            <button className="enableEthereumButton" onClick={getAccount}>
                Enable Ethereum
            </button>
            <h2>
                Account: <span className="showAccount">{account}</span>
            </h2>
        </>
    );
}
