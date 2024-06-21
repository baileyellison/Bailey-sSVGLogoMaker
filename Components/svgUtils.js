// Circle
function createCircleSVG(radius, color, text, textColor, textSize = "20px") {
    const diameter = radius * 2;
    return `<svg width="${diameter}" height="${diameter}" xmlns="http://www.w3.org/2000/svg">
                <circle cx="${radius}" cy="${radius}" r="${radius}" fill="${color}" />
                <text x="${radius}" y="${radius}" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="${textSize}">${text}</text>
            </svg>`;
}

// Square
function createSquareSVG(size, color, text, textColor, textSize = "20px") {
    return `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
                <rect width="${size}" height="${size}" fill="${color}" />
                <text x="${size / 2}" y="${size / 2}" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="${textSize}">${text}</text>
            </svg>`;
}

// Triangle
function createTriangleSVG(color, text, textColor, textSize = "20px") {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <polygon points="150,0 300,200 0,200" fill="${color}" />
                <text x="150" y="100" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="${textSize}">${text}</text>
            </svg>`;
}


// Export the functions
module.exports = {
    createCircleSVG,
    createSquareSVG,
    createTriangleSVG
};
