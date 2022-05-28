import ImgEditor from "./components/imgEditor";
import SideBar from "./components/sideBar";
import Saved from "./components/saved.js";
import MyGallery from "./components/myGallery.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <nav id="header">
                    <h1>WRONG / IMAGE</h1>
                </nav>

                <div id="body">
                    <SideBar />
                    <Routes>
                        <Route path="/saved" element={<Saved />} />
                        <Route path="/imgeditor" element={<ImgEditor />} />
                        <Route path="/gallery" element={<MyGallery />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
