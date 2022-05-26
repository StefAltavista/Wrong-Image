const specter = (p5, img, w, h, c) => {
    let hue;
    let vertical = false;
    let threshold = 300;
    let curve = 20;
    p5.colorMode(p5.HSL, 765, 255, 255, 255);
    for (let x = 0; x < w + 10; x += 1) {
        for (let y = 0; y < h; y += 1) {
            let t = p5.noise(x / 100, y / 100);
            c = img.get(x, y);
            hue = c[0] + c[1] + c[2];
            if (hue < threshold) {
                hue += curve;
                c = img.get(x, y);
                p5.stroke(hue, 140, 100);
                p5.point(x, y);
            } else {
                c = img.get(x, y);
                p5.stroke(hue, 140, 140);
                if (vertical) {
                    p5.point(x * t + x / 2, y);
                } else {
                    p5.point(x, y * t + y / 2);
                }
            }
        }
    }
};

export default specter;
