var xoff1 = 0;
var yoff1 = 0;
var xoff2 = 100;
var inc = 0.01;
var start = 0;
export default function PerlinNoise(p5) {
    p5.setup = () => {
        p5.createCanvas(500, 500);
        p5.pixelDensity(1);
    };

    p5.draw = () => {
        //perlinWorm(p5);
        //perlinScope(p5);

        p5.loadPixels();
        for (var x = 0; x < 500; x++) {
            xoff1 = 0;
            for (var y = 0; y < 500; y++) {
                //find the pixel ?
                var idx = (x + y * 500) * 4;
                p5.noiseDetail(8);
                var r = p5.noise(xoff1, yoff1) * 255;
                p5.pixels[idx + 0] = r * 2;
                p5.pixels[idx + 1] = r;
                p5.pixels[idx + 2] = r;
                p5.pixels[idx + 3] = 255;
                xoff1 += inc;
            }
            yoff1 += inc;
        }
        p5.updatePixels();
        p5.noLoop();
    };
}

function perlinWorm(p5) {
    var x = p5.noise(xoff1) * 500;
    var y = p5.noise(xoff2) * 500;
    xoff1 += 0.01;
    xoff2 += 0.01;
    // p5.background(200); //avoid cancellation
    p5.ellipse(x, y, 10, 20);
}

function perlinScope(p5) {
    p5.stroke(255);
    p5.noFill();
    p5.beginShape();
    var xoff1 = start;
    for (var x = 0; x < 500; x++) {
        p5.background(
            p5.noise(xoff1) * 250,
            p5.noise(xoff1 + 100) * 250,
            p5.noise(xoff1 + 150) * 250
        );
        p5.stroke(255);
        p5.vertex(x, p5.noise(xoff1) * 500);
        xoff1 += inc;
    }

    p5.endShape();
    start += inc;
}
