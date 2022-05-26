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
import plane from "../algorythms/plane.js";
var xoff1 = 0;
var xoff2 = 100;

export default function WrongEngine(p5) {
    let algorithm = plane;
    let img;
    let img2;
    let w;
    let h;
    let c;
    p5.preload = () => {
        img = p5.loadImage("images/bebeWatch.jpg");
        img2 = p5.loadImage("images/face.png");
        img.resize(666, 0);
        //img2.resize(666, img.height);
    };
    p5.setup = () => {
        console.log(p5);
        p5.background(0);
        p5.pixelDensity(1);
        w = 666;
        h = img.height;
        p5.createCanvas(w, h);
        p5.image(img, 0, 0);
        // p5.render();
    };
    p5.updateWithProps = (props) => {
        console.log("props", props);
        if (props.algorithm) {
            switch (props.algorithm) {
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
                    algorithm = plane;
            }

            console.log("change props", algorithm);
            p5.render();
        }
    };
    p5.render = () => {
        algorithm(p5, img, w, h, c);

        p5.colorMode(p5.RGB, 255, 255, 255, 255);
        img = p5.get();
        p5.noLoop();

        // async function file_canvas() {
        //     var canvas = document.querySelector("canvas");
        //     let file = null;
        //     canvas.toBlob(function (blob) {
        //         file = new File([blob], "test.png", {
        //             type: "image/png",
        //         });
        //         console.log("file", file);
        //         let formData = new FormData();
        //         formData.append("file", file);
        //         console.log("formData", formData);
        //         fetch("/saveimage", {
        //             method: "POST",
        //             body: formData,
        //         });
        //     }, "image/png");
        // }
        // file_canvas();
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
