const ripper = (p5, img, img2, w, h, c) => {
    let t;
    let direction = true;
    for (let x = 0; x < w; x += 1) {
        for (let y = 0; y < h; y += 1) {
            direction
                ? (t = p5.noise(x / 50, y / 500))
                : (t = p5.noise(x / 500, y / 50));
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
    return "done";
};

export default ripper;
