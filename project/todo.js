let input = document.querySelector("input");
let button = document.querySelector("#button");
let main = document.querySelector("#todos");

let template = document.createElement("div");
template.setAttribute("id", "todo-item");
template.setAttribute(
  "class",
  "p-1 my-4 hover:cursor-pointer bg-light-gray-bg hover:bg-active-gray-bg rounded-xl flex justify-between items-center overflow-hidden"
);

let checkedButton = document.createElement("input");
checkedButton.setAttribute(
  "class",
  "w-10 h-10 appearance-none bg-white checked:bg-green-500 hover:cursor-pointer rounded-lg"
);
checkedButton.setAttribute("type", "checkbox");

let content = document.createElement("span");
content.setAttribute("class", "px-4 pointer-events-none overflow-hidden w-3/4");

template.appendChild(content);
template.appendChild(checkedButton);

let taskCreator = () => {
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
};

button.addEventListener("click", taskCreator) ||
  input.addEventListener("keydown", function (event) {
    // Verifica se a tecla pressionada é Enter (código 13)
    if (event.key === "Enter") {
      // Chama a função que você deseja executar aqui
      taskCreator();
    }
  });
