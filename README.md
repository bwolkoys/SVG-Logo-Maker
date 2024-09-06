## User Story

- AS a freelance web developer
- I WANT to generate a simple logo for my projects
- SO THAT I don't have to pay a graphic designer

## Acceptance Criteria

- GIVEN a command-line application that accepts user input
- WHEN I am prompted for text
- THEN I can enter up to three characters
- WHEN I am prompted for the text color
- THEN I can enter a color keyword (OR a hexadecimal number)
- WHEN I am prompted for a shape
- THEN I am presented with a list of shapes to choose from: circle, triangle, and square
- WHEN I am prompted for the shape's color
- THEN I can enter a color keyword (OR a hexadecimal number)
- WHEN I have entered input for all the prompts
- THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
- WHEN I open the `logo.svg` file in a browser
- THEN I am shown a 300x200 pixel image that matches the criteria I entered

## Description 
- I have created a logo generator where you can input the information into the command line and it will generate a logo. Logo's are used in every business, it's what sets your brand apart (visually). This application allows you to creater a logo by entering in up to 3 characters, picking a shape and the text color and shape color. 

## Usage Instructions
- have to open the integrated terminal for Index.js, then type in the command line "node index" and answer the following 4 questions. Once all questions are answers you can open the logo.svg file with the code. Right click the file and hit "reveal in finder": this will show your created logo.

## Resources 

- To help with inquirer.prompt: https://www.npmjs.com/package/inquirer 
- To help with the choices for the shapes: https://www.digitalocean.com/community/tutorials/nodejs-interactive-command-line-prompts 
- svg circle: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Getting_Started 
- svg triangle: https://www.w3schools.com/graphics/svg_polygon.asp 
- svg square: https://www.w3schools.com/graphics/svg_rect.asp 
- help with class extends for the shapes: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends 
- if else statement help: https://www.w3schools.com/js/js_if_else.asp 

## Demo Video

- Link to Demo: https://drive.google.com/file/d/1s7VR8ZJeM1jpMyn9hptZiCW2gdCUYsPF/view?usp=sharing 