// import example from "./images/smoke.png";
// import imgSvg from "./images/flat.svg";
// import { sum } from "./helper/sum.js";
// import "./styles/main.scss";

// console.log("Webpack");
// // // Create a class property without a constructor
// class Game {
//   name = "Violin Charades";
// }
// const myGame = new Game();
// // Create paragraph node
// const p = document.createElement("p");
// p.textContent = `I like ${myGame.name}.`;

// // Create heading node
// const heading = document.createElement("h1");
// heading.textContent = "Interesting!";

// // Append SVG and heading nodes to the DOM
// const app = document.querySelector("#root");
// app.append(heading, p);

// const img = document.createElement("img");
// img.src = example;
// app.append(img);

// const svgImg = document.createElement("img");
// svgImg.src = imgSvg;
// app.append(svgImg);

// console.log(sum(2, 3));


import './styles/style.css'
import { base, list, frameworks } from "./data/hbsData";
import handleFile from './template/handle.hbs'

const markup = handleFile(base)
// console.log(markup);

const root = document.querySelector("#root")
root.insertAdjacentHTML("beforeend", markup)

import task from "./template/task.hbs";

const markupSecond = task(list);
// console.log(markupSecond);
root.insertAdjacentHTML("beforeend", markupSecond);

import thirdTask from "./template/finalTask.hbs";

const markupThird = thirdTask(frameworks);
console.log(markupThird);
root.insertAdjacentHTML("beforeend", markupThird);

