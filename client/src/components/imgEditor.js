import { ReactP5Wrapper } from "react-p5-wrapper";
import { useState } from "react";
import WrongEngine from "./wrongEngine.js";

export default function () {
    const [algorithm, setAlgorithm] = useState();

    const changeAlgo = (e) => {
        e.preventDefault();
        console.log(e.target.algorithm.value);
        setAlgorithm(e.target.algorithm.value);
    };

    return (
        <>
            <div id="imgEditor">
                <div id="imgPreview">
                    <ReactP5Wrapper
                        sketch={WrongEngine}
                        algorithm={algorithm}
                        id="canvas"
                    />
                </div>
                <form id="controlPanel" onSubmit={changeAlgo}>
                    <label htmlFor="algorithmInput"> Algorithm </label>{" "}
                    <input
                        list="algorithms"
                        name="algorithm"
                        id="algorithmInput"
                        placeholder="select.."
                    />
                    <datalist id="algorithms">
                        <option value="Collateral" />
                        <option value="Destructive" />
                        <option value="Fragmens" />
                        <option value="Liquify" />
                        <option value="Nylon" />
                        <option value="Specter" />
                    </datalist>
                    <label htmlFor="blenderInput"> Blender </label>{" "}
                    <input
                        list="blenders"
                        name="blenders"
                        id="blenderInput"
                        placeholder="select.."
                    />
                    <datalist id="blenders">
                        <option value="Mosh" />
                        <option value="Ripper" />
                        <option value="Stainer" />
                    </datalist>
                    <button type="submit">Render</button>
                </form>
            </div>
        </>
    );
}
