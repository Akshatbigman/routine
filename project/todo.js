const input = document.querySelector("input");
const button = document.querySelector("#button");
const main = document.querySelector("#todos");
let mainContent = main.querySelectorAll("#todo-item");
let checkboxes = [...main.querySelectorAll('input[type="checkbox"]')];

const template = document.createElement("div");
template.setAttribute("id", "todo-item");
template.setAttribute(
  "class",
  "p-1 my-4 hover:cursor-pointer bg-light-gray-bg hover:bg-active-gray-bg rounded-xl flex justify-between items-center overflow-hidden"
);

const checkedButton = document.createElement("input");
checkedButton.setAttribute(
  "class",
  "w-10 h-10 appearance-none bg-white checked:bg-green-500 hover:cursor-pointer rounded-lg"
);
checkedButton.setAttribute("type", "checkbox");

const content = document.createElement("span");
content.setAttribute("class", "px-4 pointer-events-none overflow-hidden w-3/4");

template.appendChild(content);
template.appendChild(checkedButton);

const eventTodos = () => {
  mainContent = main.querySelectorAll("#todo-item");
  checkboxes = [...main.querySelectorAll('input[type="checkbox"]')];
  let str = "";

  mainContent.forEach((node) => {
    node.addEventListener("click", (event) => {
      if (event.target.id === "todo-item") {
        event.target.remove();
      }
    });
  });

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked === true) {
      str = str + "true,";
    } else if (checkbox.checked === false) {
      str = str + ",";
    }
  });

  localStorage.setItem("checkboxes", str);
  localStorage.setItem("main-content", main.innerHTML);
};

const taskCreator = () => {
  if (input.value != "") {
    const templateCopy = template.cloneNode(true);
    main.appendChild(templateCopy);

    templateCopy.children[0].innerHTML = input.value;

    input.value = "";
  }
};

button.addEventListener("click", taskCreator) ||
  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      taskCreator();
      eventTodos();
    }
  });

window.addEventListener("load", () => {
  main.innerHTML = localStorage.getItem("main-content");
  checkboxes = [...main.querySelectorAll('input[type="checkbox"]')];

  checkboxes.forEach((checkbox, i) => {
    checkbox.checked = localStorage.getItem("checkboxes").split(",")[i];
  });

  eventTodos();
});

window.addEventListener("beforeunload", eventTodos);
