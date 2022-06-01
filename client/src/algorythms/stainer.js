const stainer = (p5, img, img2, w, h, c) => {
    let t;
    let newImg = p5.createImage(w, h);
    newImg.loadPixels(newImg);
    for (let x = 0; x < w; x += 1) {
        for (let y = 0; y < h; y += 1) {
            t = p5.noise(x / 100, y / 100);
            // p5.noiseDetail(8, 0.5);
            if (t > 0.5) {
                c = img2.get(x, y);
            } else {
                c = img.get(x, y);
            }
            newImg.set(x, y, p5.color(c));
        }
    }
    newImg.updatePixels();
    p5.image(newImg, 0, 0);
    return "done";
};

export default stainer;
