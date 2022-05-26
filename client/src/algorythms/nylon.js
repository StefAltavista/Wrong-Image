const nylon = (p5, img, img2, w, h, c) => {
    let color = "R";
    let divider = 2;
    let start = "xy";
    let mult = 500;

    for (let x = 0; x < w; x += 5) {
        for (let y = 0; y < h; y += 5) {
            let t = p5.noise(x / 100, y / 100);

            c = img.get(x, y);
            p5.noFill();
            if (color == "R") {
                p5.stroke(p5.color(c[0] / t / divider, c[1], c[2], c[3]));
            }
            if (color == "B") {
                p5.stroke(p5.color(c[0], c[1] / t / divider, c[2], c[3]));
            }
            if (color == "G") {
                p5.stroke(p5.color(c[0], c[1], c[2] / t / divider, c[3]));
            }
            p5.strokeWeight(1);

            if (start == "x") {
                p5.line(x, y, x + x * divider, Math.sin(x) * mult);
            }
            if (start == "y") {
                p5.line(x, y, y + y, Math.sin(x) * mult);
            }
            if (start == "xy") {
                p5.line(x, y, y + x / divider, Math.sin(y) * mult);
            }
        }
    }
};

export default nylon;
