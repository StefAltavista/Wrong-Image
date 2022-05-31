const nylon = (p5, img, img2, w, h, c, params) => {
    let color = params.color;
    let divider = 5 * (params.divider / 100);
    let mode = params.mode;
    let mult = 1000 * (params.multiplier / 100);

    for (let x = 0; x < w; x += 5) {
        for (let y = 0; y < h; y += 5) {
            let t = p5.noise(x / 100, y / 100);

            c = img.get(x, y);
            p5.noFill();
            if (color == "r") {
                p5.stroke(p5.color(c[0] / t / divider, c[1], c[2], c[3]));
            }
            if (color == "g") {
                p5.stroke(p5.color(c[0], c[1], c[2] / t / divider, c[3]));
            }
            if (color == "b") {
                p5.stroke(p5.color(c[0], c[1] / t / divider, c[2], c[3]));
            }
            p5.strokeWeight(1);

            if (mode == "x") {
                p5.line(x, y, x + x * divider, Math.sin(x) * mult);
            }
            if (mode == "y") {
                p5.line(x, y, y + y, Math.sin(x) * mult);
            }
            if (mode == "xy") {
                p5.line(x, y, y + x / divider, Math.sin(y) * mult);
            }
        }
    }
    return "done";
};

export default nylon;
