class Square {
    constructor(sideLength) {
        this.sideLength = sideLength;
        this.color = "black"; // Default color
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        // Generate SVG string for square with the specified color
        return `<rect x="50" y="50" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`;
    }
}

module.exports = Square;
