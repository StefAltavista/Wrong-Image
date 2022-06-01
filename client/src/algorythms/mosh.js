const mosh = (p5, img, img2, w, h, c, params) => {
    let ratio = 500 * (params.ratio / 100);
    let newImg = p5.createImage(w, h);
    newImg.loadPixels();
    for (let x = 0; x < w; x += 1) {
        for (let y = 0; y < h; y += 1) {
            let t = p5.noise(x / ratio, y / ratio);
            //p5.noiseDetail(4, 0.5);
            if ((t > 0.25 && t < 0.35) || (t > 0.65 && t < 0.8)) {
                c = img2.get(x, y);

                if (c[0] + c[1] + c[3] > 450) {
                    newImg.set(x - 50, y, p5.color(c));
                }
                newImg.set(x, y, p5.color(c));
            } else {
                c = img.get(x, y);

                if (c[0] + c[1] + c[3] > 450) {
                    newImg.set(x - 20, y - 50, p5.color(c));
                }
                newImg.set(x, y, p5.color(c));
            }
        }
    }
    newImg.updatePixels();
    p5.image(newImg, 0, 0);
    return "done";
};

export default mosh;
