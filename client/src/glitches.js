export default function Glitches(p5) {
    let img;
    let img2;
    let cnv;
    let w;
    let h;
    let c;
    p5.preload = () => {
        img = p5.loadImage("images/flower.jpg");
        img2 = p5.loadImage("images/autonoma.png");
    };

    p5.setup = () => {
        w = img.width;
        h = img.height;
        cnv = p5.createCanvas(w, h + 150);
        console.log(img);
        chevron(p5, img, w, h, c);
    };
    p5.draw = () => {};
}

///////chevron filter////

const shift = (p5, img, w, h, c) => {
    for (let x = 0; x < w; x += 1) {
        for (let y = 0; y < h; y += 5) {
            if (x % 2 == 0) {
                c = img.get(x, y);
                p5.push();
                p5.noFill();
                p5.stroke(p5.color(c));
                p5.strokeWeight(1);
                p5.line(x, y, x + x, Math.sin(x) * 9 + y);

                p5.pop();
            } else {
                c = img.get(w - x * Math.random() + y, h - y);
                p5.stroke(p5.color(c));
                p5.strokeWeight(1);
                p5.point(x, y);
            }
            c = img.get(x, y);
        }
    }
};

////fragments filter
const fragments = (p5, img, h, w, c) => {
    for (let x = 0; x < w; x += 3) {
        for (let y = 0; y < h; y += 5) {
            //glitch1
            if (x % 3 == 0) {
                c = img.get(x, y);
                p5.push();
                p5.noFill();
                p5.stroke(p5.color(c));
                p5.strokeWeight(2);
                p5.line(x * 2, y * 2, x + 10, Math.sin(y) * 900 + y);

                p5.pop();
            } else if (x % 5 == 0) {
                c = img.get(x, y);
                p5.stroke(p5.color(c));
                p5.strokeWeight(1);
                p5.rect(x, y * 2, 5, 1);
            }
        }
    }
};

const chevron = (p5, img, w, h, c) => {
    for (let x = 0; x < w; x += 10) {
        for (let y = 0; y < h; y += 1) {
            if (x % 2 == 0) {
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
};
