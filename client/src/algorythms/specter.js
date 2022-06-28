const specter = (p5, img, img2, w, h, c, params) => {
    let hue;
    let vertical;
    params.direction == "vertical" ? (vertical = true) : (vertical = false);

    let threshold = 350 * (params.threshold / 100);
    let curve = 25 * params.threshold;
    let px = 1000 * (params.px / 100);
    let py = 1000 * (params.py / 100);
    let newImg = p5.createImage(w, h);
    //img = p5.get();
    newImg.loadPixels(newImg);
    let color;
    p5.colorMode(p5.HSL, 765, 255, 255, 255);
    let t;
    for (let x = 0; x < w + 10; x += 1) {
        for (let y = 0; y < h; y += 1) {
            c = img.get(x, y);
            t = p5.noise(x / px, y / py);
            hue = c[0] + c[1] + c[2];
            if (hue < threshold) {
                hue += curve;
                color = p5.color(hue, 140, 100);
                newImg.set(x, y, color);
            } else {
                color = p5.color(hue, 140, 100);
                if (vertical) {
                    newImg.set(x * t + x / 2, y, color);
                } else {
                    newImg.set(x, y * t + y / 2, color);
                }
            }
        }
    }
    newImg.updatePixels();
    p5.image(newImg, 0, 0);
    return "done";
};

export default specter;
