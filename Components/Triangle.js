class Triangle {
    constructor() {
        // Default color
        this.color = "black"; 
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        // Generate SVG string for triangle with the specified color
        return `<polygon points="50,150 100,50 150,150" fill="${this.color}" />`;
    }
}

module.exports = Triangle;
