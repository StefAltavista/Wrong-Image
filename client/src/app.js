import React from "react";
import ImgEditor from "./components/imgEditor";
import SideBar from "./components/sideBar";
import WalletGallery from "./components/walletGallery.js";
import NavBar from "./components/navBar";
import Home from "./home";
import Nft from "./components/nft";
import WorkinProgress from "./components/WorkinProgress";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <NavBar />

                <div id="body">
                    <SideBar />
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/imgeditor" element={<ImgEditor />} />
                        <Route
                            path="/gallery/:walletAddress"
                            element={<WalletGallery />}
                        />
                        <Route path="/nft/:id" element={<Nft />} />
                        <Route path="/news" element={<WorkinProgress />} />
                        <Route exact path="/" element={<Home />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
