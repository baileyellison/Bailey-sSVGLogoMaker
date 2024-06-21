const fs = require('fs').promises;
const { createCircleSVG, createSquareSVG, createTriangleSVG } = require('./svgUtils');

class LogoGenerator {
    async generateLogo(text, textColor, shape, shapeColor, textSize) {
        // Validate inputs
        validateText(text);
        validateTextColor(textColor);
        validateShape(shape);
        validateShapeColor(shapeColor);

        let svgContent = '';

        switch (shape) {
            case 'circle':
                svgContent = createCircleSVG(150, shapeColor, text, textColor, textSize);
                break;
            case 'square':
                svgContent = createSquareSVG(200, shapeColor, text, textColor, textSize);
                break;
            case 'triangle':
                svgContent = createTriangleSVG(shapeColor, text, textColor, textSize);
                break;
            default:
                throw new Error('Invalid shape selected');
        }

        // Save the SVG content to a file
        const fileName = 'logo.svg';
        await fs.writeFile(fileName, svgContent);

        console.log(`Generated ${fileName}`);

        return svgContent;
    }
}

// validation text input
function validateText(text) {
    if (typeof text !== 'string') {
        throw new Error('Text must be a string.');
    }
    if (text.length > 3) {
        throw new Error('Text must be up to three characters.');
    }
}

// validation textColor input
function validateTextColor(textColor) {
    // Check if it's a valid color name or hexadecimal code
    const colorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$|^[a-zA-Z]+$/;
    if (!colorRegex.test(textColor)) {
        throw new Error('Invalid textColor format. Please provide a color name or hexadecimal code.');
    }
}

// validation shape input
function validateShape(shape) {
    const allowedShapes = ['circle', 'square', 'triangle'];
    if (!allowedShapes.includes(shape)) {
        throw new Error('Invalid shape selected. Choose from: circle, square, triangle.');
    }
}

// validation shapeColor input
function validateShapeColor(shapeColor) {
    // Check if it's a valid color name or hexadecimal code
    const colorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$|^[a-zA-Z]+$/;
    if (!colorRegex.test(shapeColor)) {
        throw new Error('Invalid shapeColor format. Please provide a color name or hexadecimal code.');
    }
}

module.exports = LogoGenerator;
