// const collateral = (p5, img, img2, w, h, c) => {
//     let color = true;
//     let divider = 2;
//     let weight = 12;
//     let a = 10;
//     let b = 10;
//     for (let x = 0; x < w; x += 2) {
//         for (let y = 0; y < h; y += 2) {
//             let t = p5.noise(x / a, y / b);
//             c = img.get(x * t, y * t);
//             //p5.noFill();
//             if (color) {
//                 if (color == "R") {
//                     p5.stroke(p5.color(c[0] / t / divider, c[1], c[2], c[3]));
//                 }
//                 if (color == "B") {
//                     p5.stroke(p5.color(c[0], c[1] / t / divider, c[2], c[3]));
//                 }
//                 if (color == "G") {
//                     p5.stroke(p5.color(c[0], c[1], c[2] / t / divider, c[3]));
//                 }
//             } else {
//                 p5.stroke(p5.color(c[0], c[1], c[2], c[3]));
//             }
//             p5.strokeWeight(weight * t);

//             p5.point(x, y);
//         }
//     }
// };
// export default collateral;
const collateral = (p5, img, img2, w, h, c, params) => {
    let weight = 10 * (params.weight / 100);
    let px = 10000 * (params.px / 100) * Math.random();
    let py = 10000 * (params.py / 100);
    let density = 20 * (params.density / 100);

    for (let x = 0; x < w; x += density) {
        for (let y = 0; y < h; y += density) {
            let t = p5.noise(x / px, y / py);
            c = img.get(x, y);
            p5.noFill();
            p5.stroke(p5.color(c));
            p5.strokeWeight(weight * t);
            p5.rect(x, y, y / t, x + y);
        }
    }
};
export default collateral;
