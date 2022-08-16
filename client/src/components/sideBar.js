import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function SideBar() {
    const account = useSelector((state) => state.account);
    return (
        <div id="sideBar">
            <Link to="/home">
                <div className="sideBarLink">
                    <p className="arrow"> {"> "} </p>
                    <p> H_ome</p>
                </div>
            </Link>

            <Link to={`/imgeditor`}>
                <div className="sideBarLink">
                    <p className="arrow"> {">"} </p>
                    <p> WroNg/ImagE EdiTor</p>
                </div>
            </Link>
            <Link to={`/gallery/${account.wallet}`}>
                <div className="sideBarLink">
                    <p className="arrow"> {">"} </p>
                    <p> YoUR GaLlery</p>
                </div>
            </Link>
            <Link to={`/gallery/0x10c336c43e6edef667c87ce0397fb572e54ea798`}>
                <div className="sideBarLink">
                    <p className="arrow"> {">"} </p>
                    <p> OwNer_'s GaLlery</p>
                </div>
            </Link>
            <Link to="/news">
                <div className="sideBarLink">
                    <p className="arrow"> {">"} </p> <p>SeaRcH & ConnEcT</p>
                </div>
            </Link>
            <Link to="/news">
                <div className="sideBarLink">
                    <p className="arrow"> {">"} </p> <p>AccOunt & SeTtings</p>
                </div>
            </Link>
        </div>
    );
}
