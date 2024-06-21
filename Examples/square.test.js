const Square = require('../Components/Square');
const { createSquareSVG } = require('../Components/svgUtils');

describe('Square Class', () => {
    test('setColor() sets the color property correctly', () => {
        const square = new Square(100);
        square.setColor('red');
        expect(square.color).toBe('red');
    });

    test('render() generates correct SVG string for square', () => {
        const square = new Square(100);
        square.setColor('yellow');
        expect(square.render()).toBe(createSquareSVG(100, 'yellow'));
    });
});
