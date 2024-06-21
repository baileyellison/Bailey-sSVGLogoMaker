const Triangle = require('../Components/Triangle');
const { createTriangleSVG } = require('../Components/svgUtils');

describe('Triangle Class', () => {
    test('setColor() sets the color property correctly', () => {
        const triangle = new Triangle();
        triangle.setColor('purple');
        expect(triangle.color).toBe('purple');
    });

    test('render() generates correct SVG string for triangle', () => {
        const triangle = new Triangle();
        triangle.setColor('orange');
        expect(triangle.render()).toBe(createTriangleSVG('orange'));
    });
});
