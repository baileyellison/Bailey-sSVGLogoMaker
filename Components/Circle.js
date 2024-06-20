class Circle {
    constructor(radius) {
        this.radius = radius;
        // Default color
        this.color = "black"; 
    }

    set(color) {
        this.color = color;
    }

    render() {
        // Generate SVG string for circle with the specified color
        return `<circle cx="100 cy="100" r="${this.radius}" fill="${this.color}"/>`;
    }
}

module.exports = Circle;