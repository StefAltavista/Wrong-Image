const destructive = (p5, img, img2, w, h, c) => {
    for (let x = 0; x < w; x += 10) {
        for (let y = 0; y < h; y += 1) {
            let t = p5.noise(x / 100, y / 100);

            if (t > 0.5) {
                c = img.get(x, y);
                p5.push();
                p5.noFill();
                p5.stroke(p5.color(c));
                p5.strokeWeight(1);
                p5.line(x, y, x + x, Math.sin(x) * 700);
                p5.pop();
            } else {
                c = img.get(Math.random() * x * 20, h - x);
                p5.stroke(p5.color(c));
                p5.strokeWeight(1);
                p5.rect(x, y);
            }
            c = img.get(x, y);
        }
    }
    return "done";
};

export default destructive;
