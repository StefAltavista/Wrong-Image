import { useState } from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import PerlinNoise from "./perlinNoise.js";
import Glitches from "./glitches.js";
import GetImage from "./getImage.js";

export default function App() {
    return (
        <div>
            <div id="logo">logo</div>
            <h1>WRONG / IMAGE</h1>
            <nav id="header">
                <div id="account">account</div>
            </nav>
            <div id="body">
                <ReactP5Wrapper sketch={Glitches} id="canvas" />
            </div>
        </div>
    );
}
