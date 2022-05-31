import { ReactP5Wrapper } from "react-p5-wrapper";
import { useState, useEffect, useRef } from "react";

import { useNavigate } from "react-router-dom";
import { ImgSaver, ImgDownloader } from "./imgSaver.js";
import Loading from "./loading.js";
import switchComands from "./switchComands";
import WrongEngine from "./wrongEngine.js";

import { useDispatch, useSelector } from "react-redux";
import { loading } from "../redux/loading/slice";
import { loaded } from "../redux/loading/slice";

let count = 1;
export default function () {
    const dispatch = useDispatch();
    const account = useSelector((state) => state.account);
    const { busy } = useSelector((state) => state.loading);
    const navigate = useNavigate();

    const [metadata, setMetadata] = useState({});
    const elemRef = useRef();
    const [parameters, setParameters] = useState();
    const [readImgOne, setReadImgOne] = useState();
    const [readImgTwo, setReadImgTwo] = useState();
    const [imgOne, setImgOne] = useState();
    const [imgTwo, setImgTwo] = useState();

    const [info, setInfo] = useState();

    const [reset, setReset] = useState(false);
    const [plus, setPlus] = useState();

    const [comandPan, setComandPan] = useState(
        <div id="algorithmsComands"></div>
    );

    const changeAlgo = (e) => {
        let comands = switchComands(e.target.value);
        setComandPan(comands);
    };
    const render = (e) => {
        e.preventDefault();
        let params = {};
        e.target.forEach((x) => {
            if (x.name) {
                if (x.type == "radio" && !x.checked) {
                    return;
                }
                params = { ...params, [x.name]: x.value };
            }
        });

        setMetadata({ ...metadata, ["Machine_" + count]: { ...params } });
        elemRef.current.scrollIntoView(false);
        count += 1;
        setParameters(params);
    };
    const save = () => {
        if (account.wallet) {
            setInfo(true);
            console.log({ metadata });
        } else {
            alert(
                "you must connect with your wallet in order to save this picture"
            );
        }
    };

    const addInfo = async (e) => {
        e.preventDefault();
        console.log(e.target.title.value);
        setMetadata({
            Title: [e.target.title.value],
            Description: [e.target.description.value],
            ...metadata,
        });
        let meta = {
            name: e.target.title.value,
            description: e.target.description.value,
            custom_fields: {
                elaborated_on: "WRONG/IMAGE",
                ...metadata,
                minted_by: "WRONG/IMAGE",
            },
        };
        setInfo(false);
        dispatch(loading());
        ImgSaver(meta, account).then(() => {
            dispatch(loaded());
            navigate(`/gallery/${account.wallet}`);
        });
    };
    const abort = () => {
        setInfo(false);
    };

    //READ IMAGE ONE
    const readFileOne = (e) => {
        console.log(e.target.files[0]);
        setReadImgOne(e.target.files[0]);
        setMetadata({ Base_Image: e.target.files[0].name, ...metadata });
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

    const deleteOne = () => {
        console.log("delete img One");
        setImgOne(null);
    };

    const addImg = () => {
        setPlus(true);
    };

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
            setImgTwo(null);
        }
    }, [readImgTwo]);
    const deleteTwo = () => {
        console.log("delete img One");
        setImgTwo(null);
        setPlus(false);
    };

    const resetCanvas = () => {
        setReset(!reset);
    };
    //JSX

    return (
        <>
            {busy && <Loading />}
            {info && (
                <div id="info">
                    <form id="formInfo" onSubmit={addInfo}>
                        <div id="infoInput">
                            <p>Title</p>
                            <input type="text" name="title"></input>
                            <p>Description</p>
                            <textarea
                                id="description"
                                name="description"
                            ></textarea>
                            <div id="info_buttons">
                                <button>Submit</button>
                                <button onClick={abort}>Abort</button>
                            </div>

                            <p id="note">
                                Once the image is submitted it wont be editable,{" "}
                                <br></br> it will be stored in IPFS -
                                decentralized database{" "}
                            </p>
                        </div>
                    </form>
                </div>
            )}

            <div id="imgEditor">
                <div id="meta_text_div">
                    <fieldset id="meta_text">
                        <legend>Metadata</legend>
                        <p ref={elemRef}>{JSON.stringify(metadata, "", 4)}</p>
                    </fieldset>
                </div>
                <div id="imgPreview">
                    <ReactP5Wrapper
                        sketch={WrongEngine}
                        parameters={parameters}
                        id="canvas"
                        image={imgOne}
                        imageTwo={imgTwo}
                        reset={reset}
                        dispatch={dispatch}
                    />
                </div>
                <div id="imagePanel">
                    <div>
                        <p>Select Images</p>
                        <p>Image 1:</p>
                        <div id="selectImages">
                            <input type="file" onChange={readFileOne}></input>
                            {imgOne && (
                                <div id="editorThum">
                                    <img src={imgOne} id="thumPreview" />
                                    <p onClick={deleteOne}>X</p>
                                </div>
                            )}
                        </div>
                        {plus && (
                            <>
                                <p>Image 2:</p>
                                <div id="selectImages">
                                    <input
                                        type="file"
                                        onChange={readFileTwo}
                                    ></input>
                                    {imgTwo && (
                                        <div id="editorThum">
                                            <img
                                                src={imgTwo}
                                                id="thumPreview"
                                            />
                                            <p onClick={deleteTwo}>X</p>
                                        </div>
                                    )}
                                </div>
                            </>
                        )}
                        {!plus && (
                            <div id="plus" onClick={addImg}>
                                +
                            </div>
                        )}
                    </div>
                    <div id="storeImg">
                        <button onClick={save}>Save</button>
                        <button
                            onClick={() => ImgDownloader(this)}
                            download="myImage.jpg"
                        >
                            Download{" "}
                        </button>
                    </div>
                </div>
                <div id="controlPanel">
                    <form onSubmit={render} onReset={resetCanvas}>
                        <p> Algorithm </p>{" "}
                        <select
                            name="algorithm"
                            id="algorithmInput"
                            onChange={changeAlgo}
                        >
                            <option value="Plane" disabled selected>
                                Select...
                            </option>
                            <option value="Collateral">Collateral</option>
                            <option value="Destructive">Destructive</option>
                            <option value="Fragments">Fragments</option>
                            <option value="Liquify">Liquify</option>
                            <option value="Nylon">Nylon</option>
                            <option value="Specter">Specter (pro)</option>
                            <option value="Mosh">Blender: Mosh</option>
                            <option value="Ripper">Blender: Ripper</option>
                            <option value="Stainer">Blender: Stainer</option>
                        </select>
                        {comandPan}
                        <button type="submit">Render</button>
                        <button type="reset">Reset</button>
                    </form>
                </div>
            </div>
        </>
    );
}
