// imports the LogoGenerator class from the LogoGenerator.js file
const LogoGenerator = require('./Components/LogoGenerator');
const fs = require('fs').promises;

async function runCLI() {
    try {
        const { default: inquirer } = await import('inquirer');

        const logoGenerator = new LogoGenerator();

        const userInput = await inquirer.prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter up to three text characters for the logo:'
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Enter color name or hex code for text shown in shape:'
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Choose a shape:',
                choices: ['circle', 'square', 'triangle']
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Enter color name or hex code for shape color:'
            }
        ]);

        const { text, textColor, shape, shapeColor } = userInput;

        const svgLogo = await logoGenerator.generateLogo(text, textColor, shape, shapeColor);

        const fileName = 'logo.svg';
        await fs.writeFile(fileName, svgLogo); // Using fs promises API to write SVG content to file
        console.log(`Saved to ${fileName}`);
    } catch (error) {
        console.error('Error generating logo:', error);
    }
}

runCLI();
