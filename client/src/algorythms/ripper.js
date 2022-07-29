const ripper = (p5, img, img2, w, h, c, params) => {
    let t;

    let direction;
    params.direction == "vertical" ? (direction = true) : (direction = false);

    let newImg = p5.createImage(w, h);
    newImg.loadPixels(newImg);
    let r = Math.random() * 100;
    for (let x = 0; x < w; x += 1) {
        for (let y = 0; y < h; y += 1) {
            direction
                ? (t = p5.noise(x / 50 - r, y / 500 + r))
                : (t = p5.noise(x / 500 + r, y / 50 - r));
            //p5.noiseDetail(24, 0.5);
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

export default ripper;
