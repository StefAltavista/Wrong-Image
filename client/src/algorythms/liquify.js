const liquify = (p5, img, w, h, c) => {
    let orizontal = false;
    for (let x = 0; x < w + 10; x += 1) {
        for (let y = 0; y < h; y += 1) {
            let t = p5.noise(x / 100, y / 100);
            if (t < 0.5) {
                if (orizontal) {
                    c = img.get(x, y / t);
                } else {
                    c = img.get(x / t, y);
                }

                p5.stroke(p5.color(c));
                p5.point(x, y);
            } else {
                if (!orizontal) {
                    c = img.get(x, y * t);
                } else {
                    c = img.get(x * t, y);
                }

                p5.stroke(p5.color(c));
                p5.point(x, y);
            }

            // c = img.get(x * (t / 2), y);
            // p5.colorMode(p5.RGB, 255, 255, 255, 255);

            // p5.stroke(c[0], c[1], c[2], c[3]);
            // p5.point(x, y);
        }
    }
};

export default liquify;
