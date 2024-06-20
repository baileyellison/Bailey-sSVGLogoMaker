// circle
function createCircleSVG(radius, color) {
    return `<circle cx="100" cy="100" r="${radius}" fill="${color}" />`;
}

// square
function createSquareSVG(sideLength, color) {
    return `<rect x="50" y="50" width="${sideLength}" height="${sideLength}" fill="${color}" />`;
}

// triangle
function createTriangleSVG(color) {
    return `<polygon points="50,150 100,50 150,150" fill="${color}" />`;
}

// exporting functions
module.exports = {
    createCircleSVG,
    createSquareSVG,
    createTriangleSVG
};
