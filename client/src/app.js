import { useState } from "react";
import { Link } from "react-router-dom";
import ImgEditor from "./components/imgEditor";
import SideBar from "./components/sideBar";

export default function App() {
    return (
        <div>
            <nav id="header">
                <h1>WRONG / IMAGE</h1>
            </nav>

            <div id="body">
                <SideBar />
                <ImgEditor />
            </div>
        </div>
    );
}
