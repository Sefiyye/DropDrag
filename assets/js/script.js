let item = document.querySelector(".item");
let dropZone = document.querySelector(".dropZone");

item.addEventListener("dragstart", (e) => {
  let red = item.getAttribute("data-red");
  let green = item.getAttribute("data-green");
  let blue = item.getAttribute("data-blue");
  let rgbColors = {
    red: red,
    green: green,
    blue: blue,
  };
  e.dataTransfer.setData("text", JSON.stringify(rgbColors));
});

dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
});

dropZone.addEventListener("drop", (e) => {
  let rgbColors = JSON.parse(e.dataTransfer.getData("text"));

  let { red: qirmizi, green: yasil, blue: goy } = rgbColors;

  dropZone.style.backgroundColor = `rgb(${qirmizi},${yasil},${goy})`;
});