const Circle = require('../Components/Circle');
const { createCircleSVG } = require('../Components/svgUtils');

describe('Circle Class', () => {
    test('setColor() sets the color property correctly', () => {
        const circle = new Circle(50);
        circle.setColor('blue');
        expect(circle.color).toBe('blue');
    });

    test('render() generates correct SVG string for circle', () => {
        const circle = new Circle(50);
        circle.setColor('green');
        expect(circle.render()).toBe(createCircleSVG(50, 'green'));
    });
});
