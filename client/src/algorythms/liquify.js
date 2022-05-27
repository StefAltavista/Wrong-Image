const liquify = (p5, img, img2, w, h, c, params) => {
    let px = 200 * (params.px / 100);
    let py = 200 * (params.px / 100);
    img = p5.get();
    let newImg = p5.createImage(w, h);
    newImg.loadPixels(newImg);
    p5.pixelDensity(1);
    for (let x = 0; x < w; x += 1) {
        for (let y = 0; y < h; y += 1) {
            let t = p5.noise(x / px, y / py);
            if (t < 0.5) {
                c = img.get(x / t, y * t);
            } else {
                c = img.get(x * t, y * t);
            }
            newImg.set(x, y, p5.color(c));
        }
    }
    newImg.updatePixels();
    p5.image(newImg, 0, 0);
};

export default liquify;
