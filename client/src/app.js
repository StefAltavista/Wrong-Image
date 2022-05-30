import ImgEditor from "./components/imgEditor";
import SideBar from "./components/sideBar";
import Saved from "./components/saved.js";
import WalletGallery from "./components/walletGallery.js";
import NavBar from "./components/navBar";
import Home from "./home";
import Nft from "./components/nft";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

export default function App() {
    const account = useSelector((state) => state.account);
    return (
        <BrowserRouter>
            <div>
                <NavBar />

                <div id="body">
                    <SideBar />
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/saved" element={<Saved />} />
                        <Route path="/imgeditor" element={<ImgEditor />} />
                        <Route
                            path="/gallery/:walletAddress"
                            element={<WalletGallery />}
                        />
                        <Route path="/nft/:id" element={<Nft />} />

                        <Route exact path="/" element={<Home />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
