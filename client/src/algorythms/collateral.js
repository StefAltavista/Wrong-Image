const collateral = (p5, img, img2, w, h, c) => {
    let color = false;
    let divider = 1;
    let weight = 12;
    let a = 100;
    let b = 100;
    for (let x = 0; x < w; x += 5) {
        for (let y = 0; y < h; y += 5) {
            let t = p5.noise(x / a, y / b);

            c = img.get(x, y);
            p5.noFill();
            if (color) {
                if (color == "R") {
                    p5.stroke(p5.color(c[0] / t / divider, c[1], c[2], c[3]));
                }
                if (color == "B") {
                    p5.stroke(p5.color(c[0], c[1] / t / divider, c[2], c[3]));
                }
                if (color == "G") {
                    p5.stroke(p5.color(c[0], c[1], c[2] / t / divider, c[3]));
                }
            } else {
                p5.stroke(p5.color(c[0], c[1], c[2], c[3]));
            }
            // p5.stroke(p5.color(c));
            p5.strokeWeight(weight * t);

            p5.rect(x, y, y / t, x + y);
        }
    }
};
export default collateral;
