const fragments = (p5, img, h, w, c) => {
    for (let x = 0; x < w; x += 1) {
        for (let y = 0; y < h; y += 1) {
            let t = p5.noise(x / 100, y / 100);
            if (false) {
                c = img.get(x, y);

                p5.stroke(p5.color(c));
                p5.strokeWeight(2);

                t > 0.6
                    ? p5.line(x * 2, y * 2, x + 10, Math.sin(y) * 10)
                    : p5.line(x * 2, x * y, x + 10, Math.sin(x) * 10);
            } else if (x % 5 == 0 && t > 0.5) {
                c = img.get(x, y);
                p5.stroke(p5.color(c));
                p5.strokeWeight(1);
                p5.rect(x, y * 2, 5, 1);
            }
        }
    }
};

export default fragments;
