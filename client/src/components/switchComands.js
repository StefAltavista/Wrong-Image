/* eslint-disable indent */
import React from "react";

function switchComands(algorithm) {
    let comands;
    switch (algorithm) {
        case "Collateral":
            comands = (
                <div id="algorithmsComands">
                    <p>Weight</p>
                    <input
                        type="range"
                        min="1"
                        id="inputRange"
                        name="weight"
                    ></input>
                    <p>Density</p>
                    <input
                        type="range"
                        min="1"
                        id="inputRange"
                        name="density"
                    ></input>
                    <p>Px</p>
                    <input
                        type="range"
                        min="1"
                        id="inputRange"
                        name="px"
                    ></input>
                    <p>Px</p>
                    <input
                        type="range"
                        min="1"
                        id="inputRange"
                        name="py"
                    ></input>
                </div>
            );
            break;
        case "Fragments":
            comands = (
                <div id="algorithmsComands">
                    <p>Threshold</p>
                    <input
                        type="range"
                        id="inputRange"
                        name="threshold"
                        min="1"
                    ></input>
                    <p>Curve</p>
                    <input
                        type="range"
                        min="1"
                        id="inputRange"
                        name="curve"
                    ></input>
                    <p>Conditional</p>
                    <input
                        type="range"
                        id="inputRange"
                        name="conditional"
                    ></input>
                </div>
            );
            break;
        case "Liquify":
            comands = (
                <div id="algorithmsComands">
                    <p>Px</p>
                    <input
                        type="range"
                        min="1"
                        id="inputRange"
                        name="px"
                    ></input>
                    <p>Py</p>
                    <input
                        type="range"
                        min="1"
                        id="inputRange"
                        name="py"
                    ></input>
                </div>
            );
            break;
        case "Nylon":
            comands = (
                <div id="algorithmsComands">
                    <p>Multiplier</p>
                    <input
                        type="range"
                        id="inputRange"
                        name="multiplier"
                        min="1"
                    ></input>
                    <fieldset>
                        <legend>Mode</legend>

                        <div>
                            <input
                                type="radio"
                                id="x"
                                name="mode"
                                value="x"
                            ></input>
                            <label htmlFor="x">X</label>
                        </div>

                        <div>
                            <input
                                type="radio"
                                id="y"
                                name="mode"
                                value="y"
                            ></input>
                            <label htmlFor="y">Y</label>
                        </div>

                        <div>
                            <input
                                type="radio"
                                id="xy"
                                name="mode"
                                value="xy"
                            ></input>
                            <label htmlFor="xy">XY</label>
                        </div>
                    </fieldset>
                    <p>Divider</p>
                    <input
                        type="range"
                        min="1"
                        id="inputRange"
                        name="divider"
                    ></input>

                    <fieldset>
                        <legend>Color</legend>

                        <div>
                            <input type="radio" name="color" value="r" />
                            <label htmlFor="R">R</label>
                        </div>

                        <div>
                            <input type="radio" name="color" value="g" />
                            <label htmlFor="g">G</label>
                        </div>

                        <div>
                            <input type="radio" name="color" value="b" />
                            <label htmlFor="b">B</label>
                        </div>
                    </fieldset>
                </div>
            );
            break;
        case "Specter":
            comands = (
                <div id="algorithmsComands">
                    <p>Threshold</p>
                    <input
                        type="range"
                        id="inputRange"
                        name="threshold"
                        min="1"
                    ></input>
                    <p>Curve</p>
                    <input
                        type="range"
                        min="1"
                        id="inputRange"
                        name="Curve"
                    ></input>
                    <fieldset>
                        <legend>Direction</legend>

                        <div>
                            <input
                                type="radio"
                                name="direction"
                                value="orizontal"
                                defaultChecked
                            />
                            <label>Orizontal</label>
                        </div>

                        <div>
                            <input
                                type="radio"
                                name="direction"
                                value="vertical"
                            />
                            <label>Vertical</label>
                        </div>
                    </fieldset>
                    <p>Px</p>
                    <input
                        type="range"
                        min="1"
                        id="inputRange"
                        name="px"
                    ></input>
                    <p>Py</p>
                    <input
                        type="range"
                        min="1"
                        id="inputRange"
                        name="py"
                    ></input>
                </div>
            );
            break;
        case "Ripper":
            comands = (
                <div id="algorithmsComands">
                    <fieldset>
                        <legend>Direction</legend>

                        <div>
                            <input
                                type="radio"
                                name="direction"
                                value="orizontal"
                                defaultChecked
                            />
                            <label>Orizontal</label>
                        </div>

                        <div>
                            <input
                                type="radio"
                                name="direction"
                                value="vertical"
                            />
                            <label>Vertical</label>
                        </div>
                    </fieldset>
                </div>
            );
            break;
        case "Mosh":
            comands = (
                <div id="algorithmsComands">
                    <p>Ratio</p>
                    <input
                        type="range"
                        id="inputRange"
                        name="ratio"
                        min="1"
                    ></input>
                </div>
            );
            break;
    }
    return comands;
}
export default switchComands;
