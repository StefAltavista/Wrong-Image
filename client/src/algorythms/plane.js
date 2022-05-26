const plane = (p5, img, img2, w, h, c) => {
    for (let x = 0; x < w + 10; x += 1) {
        for (let y = 0; y < h; y += 1) {
            c = img.get(x, y);
            p5.stroke(p5.color(c));
            p5.point(x, y);
        }
    }
};

export default plane;
