class Circle {
    constructor(radius) {
        this.radius = radius;
        // Default color
        this.color = "black"; 
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />
                </svg>`;
    }
}

module.exports = Circle;
