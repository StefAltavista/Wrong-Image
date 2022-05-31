const fragments = (p5, img, img2, h, w, c, params) => {
    console.log(params);
    let hue;

    let newImg = p5.createImage(w, h);
    newImg.loadPixels(newImg);
    let threshold = 700 * (params.threshold / 100);
    let curve = 700 * (params.curve / 100);
    let conditional = 1000000 * (params.conditional / 100);

    for (let x = 0; x < w; x += 1) {
        for (let y = 0; y < h; y += 1) {
            let t = p5.noise(x / conditional, y / conditional);

            c = img.get(x, y);
            p5.colorMode(p5.HSL, 765, 255, 255, 255);
            hue = c[0] + c[1] + c[3];
            if (hue > threshold) {
                hue -= curve;
            }
            hue *= t / 2;
            //p5.stroke(hue, 140, 125);
            newImg.set(x, y, p5.color(hue, 140, 125));
            // p5.strokeWeight(1);
            // p5.point(x, y);

            p5.colorMode(p5.RBG, 255, 255, 255, 255);
        }
    }
    newImg.updatePixels();
    p5.image(newImg, 0, 0);
    return "done";
};

export default fragments;
