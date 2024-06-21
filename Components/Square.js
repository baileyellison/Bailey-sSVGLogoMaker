class Square {
    constructor(sideLength) {
        this.sideLength = sideLength;
        this.color = "black"; // Default color
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    <rect x="50" y="50" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />
                </svg>`;
    }
}

module.exports = Square;
