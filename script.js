//To Choose a random color
const button = document.querySelector("button");
const body = document.querySelector("body");
const colors = [
  "lightred",
  "lightgreen",
  "lightcyan",
  "yellow",
  "pink",
  "lime",
  "orange",
  "lightblue",
  "smokewhite",
  "navy blue",
  "#d8bfd8",
  "#de6fa1",
  "#fc89ac",
  "#0abab5",
  "#e08d3c",
  "#dbd7d2",
  "#eee600",
  "#ff6347",
  "#746cc0",
  "#ffc87c",
  "#fd0e35",
  "#808080",
  "#00755e",
  "peach",
];

body.style.backgroundColor = "violet";
button.addEventListener("click", changeBackground);

function changeBackground() {
  const colorIndex = parseInt(Math.random() * colors.length);
  body.style.backgroundColor = colors[colorIndex];
}
