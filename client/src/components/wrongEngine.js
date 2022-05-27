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
var xoff1 = 0;
var xoff2 = 100;

export default function WrongEngine(p5) {
    let algorithm = "plane";
    let img;
    let img2;
    let w;
    let h;
    let c;
    let params = {};
    let canvas;
    let imgDflt;
    p5.preload = () => {
        imgDflt = p5.loadImage("images/bebeWatch.jpg");
        imgDflt.resize(666, 0);
        img = imgDflt;

        //img2 = p5.loadImage("images/face.png");

        //img2.resize(666, img.height);
    };
    p5.setup = () => {
        console.log("def=", imgDflt, img);
        p5.background(220, 141, 155);
        p5.pixelDensity(1);
        w = 666;
        h = img.height;
        canvas = p5.createCanvas(w, h);
        p5.render();
    };
    p5.updateWithProps = (props) => {
        console.log("props", props);
        if (props.reset) {
            algorithm = "plane";
            img = p5.loadImage(props.image, () => {
                img.resize(666, 0);
                p5.image(img, 0, 0);
                return;
            });
        }

        if (props.parameters) {
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
            p5.render();
            return;
        }
        if (props.image) {
            p5.remove(img);
            img = p5.loadImage(props.image, () => {
                img.resize(666, 0);
                p5.remove(canvas);
                p5.createCanvas(666, img.height);
                p5.render();
                return;
            });
        } else {
            p5.remove(img);
            console.log("no img1: default=", imgDflt);
            img = imgDflt;
        }
        if (props.imageTwo) {
            p5.remove(img2);
            img2 = p5.loadImage(props.imageTwo, () => {
                img2.resize(666, 0);

                return;
            });
        } else {
            p5.remove(img2);
        }
    };
    p5.render = () => {
        if (algorithm == "plane") {
            p5.image(img, 0, 0);
        } else {
            console.log("RENDER:", img);
            algorithm(p5, img, img2, w, h, c, params);

            p5.colorMode(p5.RGB, 255, 255, 255, 255);
            img = p5.get();
        }
        p5.noLoop();
    };
}

////PERLIN NOISER DRAWERS
function perlinWorm(p5) {
    var x = p5.noise(xoff1) * 700;
    var y = p5.noise(xoff2) * 700;
    var z = p5.noise(y) * 250;
    xoff1 += 0.005;
    xoff2 += 0.005;
    p5.fill(y / 2, (x * z) / 500, x, z + 100);

    p5.stroke(p5.color(x, y, z));

    p5.ellipse(x, y, x - y, y / 50);
}
