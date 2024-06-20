// Example usage in LogoGenerator.js

const Circle = require('./Circle');
const Square = require('./Square');
const Triangle = require('./Triangle');

// Creates a circle
let circle = new Circle(50); 
circle.setColor('blue'); 
console.log(circle.render()); 

// Creates a square
let square = new Square(100); 
square.setColor('green'); 
console.log(square.render()); 

// Creates a triangle
let triangle = new Triangle(); 
triangle.setColor('red'); 
console.log(triangle.render()); 
