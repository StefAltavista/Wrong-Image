import { useState } from "react";

export default function Main() {
    return (
        <div>
            <nav id="header">
                <div id="account">account</div>
                <h1>WRONG / IMAGE</h1>
                <div id="logo">logo</div>
            </nav>
            <div id="body">
                <div id="image">
                    <img src="/images/flower.jpg" onClick={fetchArchive} />
                </div>
            </div>
        </div>
    );
}
