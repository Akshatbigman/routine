let input = document.querySelector("input");
let button = document.querySelector("#button");
let main = document.querySelector("#todos");

let template = document.createElement("div");
template.setAttribute(
  "class",
  "p-3 my-3 hover:cursor-pointer bg-light-gray-bg hover:bg-active-gray-bg rounded-xl"
);

let deleteButton = document.createElement("div");
let checkedButton = document.createElement("div");

button.addEventListener("click", () => {
  if (input.value != "") {
    let templateCopy = template.cloneNode(false);
    templateCopy.innerHTML = input.value;
    main.appendChild(templateCopy);
  }
});
