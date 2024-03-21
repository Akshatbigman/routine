let input = document.querySelector("input");
let button = document.querySelector("#button");
let main = document.querySelector("#todos");

let template = document.createElement("div");
template.setAttribute("id", "todo-item");
template.setAttribute(
  "class",
  "p-2 my-4 hover:cursor-pointer bg-light-gray-bg hover:bg-active-gray-bg rounded-xl flex justify-between items-center"
);
let checkedButton = document.createElement("input");
checkedButton.setAttribute(
  "class",
  "w-8 h-8 appearance-none bg-white checked:bg-green-500 rounded-lg"
);
checkedButton.setAttribute("type", "checkbox");
let content = document.createElement("div");

template.appendChild(content);
template.appendChild(checkedButton);

button.addEventListener("click", () => {
  if (input.value != "") {
    let templateCopy = template.cloneNode(true);
    main.appendChild(templateCopy);

    templateCopy.children[0].innerHTML = input.value;

    templateCopy.addEventListener("click", (event) => {
      if (event.target.id === "todo-item") {
        event.target.remove();
      }
    });
  }
});
