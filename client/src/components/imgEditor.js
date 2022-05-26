import { ReactP5Wrapper } from "react-p5-wrapper";
import { useState, useEffect } from "react";
import WrongEngine from "./wrongEngine.js";

export default function () {
    const [algorithm, setAlgorithm] = useState();
    const [readImgOne, setReadImgOne] = useState();
    const [imgOne, setImgOne] = useState();
    const [readImgTwo, setReadImgTwo] = useState();
    const [imgTwo, setImgTwo] = useState();

    const changeAlgo = (e) => {
        e.preventDefault();
        console.log(e.target.algorithm.value);
        setAlgorithm(e.target.algorithm.value);
    };

    //READ IMAGE ONE
    const readFileOne = (e) => {
        console.log(e.target.files[0]);
        setReadImgOne(e.target.files[0]);
    };

    useEffect(() => {
        if (readImgOne) {
            const reader = new FileReader();
            reader.readAsDataURL(readImgOne);
            reader.onloadend = () => {
                setImgOne(reader.result);
            };
        } else {
            setImgOne(null);
        }
    }, [readImgOne]);

    //READ IMAGE TWO
    const readFileTwo = (e) => {
        console.log(e.target.files[0]);
        setReadImgTwo(e.target.files[0]);
    };

    useEffect(() => {
        if (readImgTwo) {
            const reader = new FileReader();
            reader.readAsDataURL(readImgTwo);
            reader.onloadend = () => {
                setImgTwo(reader.result);
            };
        } else {
            setImgOne(null);
        }
    }, [readImgTwo]);

    //JSX

    return (
        <>
            <div id="imgEditor">
                <div id="imgPreview">
                    <ReactP5Wrapper
                        sketch={WrongEngine}
                        algorithm={algorithm}
                        id="canvas"
                        image={imgOne}
                        imageTwo={imgTwo}
                    />
                </div>
                <div id="controlPanel">
                    <p>Select Images</p>

                    <p>Image 1:</p>
                    <div id="selectImages">
                        <input type="file" onChange={readFileOne}></input>
                        {readImgOne && (
                            <img src={imgOne} id="editorImgPreview" />
                        )}
                    </div>
                    <p>Image 2:</p>
                    <div id="selectImages">
                        <input type="file" onChange={readFileTwo}></input>
                        {readImgTwo && (
                            <img src={imgOne} id="editorImgPreview" />
                        )}
                    </div>
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
