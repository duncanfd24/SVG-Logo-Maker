// use inquirer to ask questions about svg shape, shape color, text, and text color
// take inquirer answers and format an svg tag based off of user input
// Use OOP class with a fs writefile to insert produced tag in a brand new file name logo.svg
const inquirer = require("inquirer")
const fs = require("fs");
const {Circle, Square, Triangle} = require("./lib/shapes.js");


function startApp (){
    inquirer.prompt ([
        {
            type: "list",
            name: "shape",
            message: "Please choose a shape for your logo",
            choices: ["circle", "square", "triangle"]
        },
        {
            type: "input",
            name: "shape_color",
            message: "Please enter a color for your logo's shape.",
        },
        {
            type: "input",
            name: "text",
            message: "Please enter the text for your logo.",
        },
        {
            type: "input",
            name: "text_color",
            message: "Please enter the color for your logo's text.",
        },
    ]).then(response => {
        //console.log(response)
        let chosenShape;

        if (response.shape === "circle") {
            chosenShape = new Circle(response.shape_color)
        }
       else if(response.shape === "square") {
            chosenShape = new Square(response.shape_color)
       }

       else if(response.shape === "triangle") {
            chosenShape = new Triangle(response.shape_color)
       }

       const newTag = `
       <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

       ${chosenShape.render()}
     
       <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.text_color}">${response.text}</text>
     
       </svg>
       `;

       fs.writeFileSync("logo.svg", newTag);
    });
}

///starts App
startApp();

