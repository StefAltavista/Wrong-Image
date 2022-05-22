const stainer = (p5, img, img2, w, h, c) => {
    let t;
    for (let x = 0; x < w; x += 1) {
        for (let y = 0; y < h; y += 1) {
            t = p5.noise(x / 100, y / 100);

            p5.noiseDetail(24, 0.5);
            if (t > 0.5) {
                c = img2.get(x, y);
                p5.stroke(p5.color(c));
                p5.strokeWeight(2);
                p5.point(x, y);
            } else {
                c = img.get(x, y);

                p5.stroke(p5.color(c));
                p5.strokeWeight(2);
                p5.point(x, y);
            }
            // }
        }
    }
};

export default stainer;
