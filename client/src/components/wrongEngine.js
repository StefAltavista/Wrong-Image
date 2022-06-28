/* eslint-disable indent */
import destructive from "../algorythms/destructive";
import liquify from "../algorythms/liquify";
import mosh from "../algorythms/mosh";
import stainer from "../algorythms/stainer";
import ripper from "../algorythms/ripper";
import specter from "../algorythms/specter";
import nylon from "../algorythms/nylon";
import collateral from "../algorythms/collateral";
import fragments from "../algorythms/fragments";
import PerlinNoise from "../algorythms/perlinNoise.js";
import { loading } from "../redux/loading/slice";
import { loaded } from "../redux/loading/slice";
var xoff1 = 0;
var xoff2 = 100;

export default async function WrongEngine(p5) {
    let algorithm = "plane";
    let img;
    let img2;
    let w;
    let h;
    let c;
    let params = {};
    let canvas;
    let imgDflt;
    let setup = true;

    //-----------------------------------load default function------------------------------------//
    p5.preload = () => {
        imgDflt = p5.loadImage("images/default1.png");
        imgDflt.resize(500, 0);
        img = imgDflt;
        img2 = p5.loadImage("images/default.png");
        img2.resize(500, img.height);
    };

    //-----------------------------------setup vanvas------------------------------------//
    p5.setup = () => {
        // console.log("def=", imgDflt, img);
        p5.background(220, 141, 155);
        p5.pixelDensity(1);
        w = 500;
        h = img.height;
        canvas = p5.createCanvas(w, h);
        p5.render();
    };

    //-----------------------------------update canvas function------------------------------------//
    p5.updateWithProps = (props) => {
        // if (!setup) props.dispatch(loading());

        if (props.update == "resetCanvas") {
            console.log("reset");
            algorithm = "plane";
            if (props.image) {
                img = p5.loadImage(props.image, () => {
                    p5.remove(canvas);
                    img.resize(500, 0);
                    p5.createCanvas(500, img.height);
                    p5.image(img, 0, 0);
                    props.dispatch(loaded());
                    return;
                });
            } else {
                p5.remove(canvas);
                img = imgDflt;
                p5.image(img, 0, 0);
                p5.createCanvas(500, img.height);
                props.dispatch(loaded());
                return;
            }
        }

        if (props.update == "algorithm") {
            params = { ...props.parameters };
            switch (props.parameters.algorithm) {
                case "Destructive":
                    algorithm = destructive;
                    break;
                case "Liquify":
                    algorithm = liquify;
                    break;
                case "Mosh":
                    algorithm = mosh;
                    break;
                case "Stainer":
                    algorithm = stainer;
                    break;
                case "Ripper":
                    algorithm = ripper;
                    break;
                case "Specter":
                    algorithm = specter;
                    break;
                case "Nylon":
                    algorithm = nylon;
                    break;
                case "Collateral":
                    algorithm = collateral;
                    break;
                case "Fragments":
                    algorithm = fragments;
                    break;
                default:
                    algorithm = "plane";
            }
            props.parameters = null;
            p5.render(props.dispatch);
            return;
        }
        if (props.update == "addImageOne") {
            console.log("change image One");
            p5.remove(img);
            img = p5.loadImage(props.image, () => {
                img.resize(500, 0);
                p5.remove(canvas);
                p5.createCanvas(500, img.height);
                p5.image(img, 0, 0);
                props.dispatch(loaded());
                return;
            });
        }
        if (props.update == "deleteImageOne") {
            p5.remove(img);
            p5.remove(canvas);
            img = imgDflt;
            img.resize(500, 0);
            p5.createCanvas(500, img.height);
            p5.image(img, 0, 0);
            props.dispatch(loaded());
            return;
        }
        if (props.update == "addImageTwo") {
            console.log("newIMage2", props.imageTwo);
            img2 = null;
            img2 = p5.loadImage(props.imageTwo, () => {
                img2.resize(500, img.height);
                props.dispatch(loaded());

                return;
            });
        }
        if (props.update == "deleteImageTwo") {
            img2 = img;
            props.dispatch(loaded());
        }
    };

    //-----------------------------------render function------------------------------------//
    p5.render = (dispatch) => {
        if (algorithm == "plane") {
            p5.image(img, 0, 0);
        } else {
            let done = algorithm(p5, img, img2, w, h, c, params);
            if (done) {
                console.log("done");
                dispatch(loaded());
            }

            p5.colorMode(p5.RGB, 255, 255, 255, 255);
            img = p5.get();
        }
        p5.noLoop();
        setup = false;
    };
}

//------------------------------------experimental--------------------------------------//
// function perlin(p5) {
//     var x = p5.noise(xoff1) * 700;
//     var y = p5.noise(xoff2) * 700;
//     var z = p5.noise(y) * 250;
//     xoff1 += 0.005;
//     xoff2 += 0.005;
//     p5.fill(y / 2, (x * z) / 500, x, z + 100);
//     p5.stroke(p5.color(x, y, z));
//     p5.ellipse(x, y, x - y, y / 50);
// }
