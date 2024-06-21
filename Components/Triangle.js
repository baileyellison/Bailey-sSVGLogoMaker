class Triangle {
    constructor() {
        // Default color
        this.color = "black"; 
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="150,200 300,0 0,0" fill="${this.color}" />
                </svg>`;
    }
}

module.exports = Triangle;
