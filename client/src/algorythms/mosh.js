const mosh = (p5, img, img2, w, h, c) => {
    for (let x = 0; x < w; x += 1) {
        for (let y = 0; y < h; y += 1) {
            let t = p5.noise(x / 100, y / 100);
            p5.noiseDetail(4, 0.5);
            if ((t > 0.2 && t < 0.4) || (t > 0.6 && t < 0.8)) {
                c = img2.get(x, y);

                p5.stroke(p5.color(c));
                p5.strokeWeight(2);
                if (c[0] + c[1] + c[3] > 450) {
                    p5.point(x - 50, y);
                }
                p5.point(x, y);
            } else {
                c = img.get(x, y);

                p5.stroke(p5.color(c));
                p5.strokeWeight(2);
                if (c[0] + c[1] + c[3] > 450) {
                    p5.point(x, y - 50);
                }
                p5.point(x, y);
            }
        }
    }
    return "done";
};

export default mosh;
