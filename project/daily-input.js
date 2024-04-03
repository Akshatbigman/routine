let checkboxes2 = [...main.querySelectorAll('input[type="checkbox"]')];

let date = new Date();
const day = date.getDate();
const month = "0" + (date.getMonth() + 1);
date = day + "/" + month;

const dailyReset = () => {
  uncheckInputs();

  let date = new Date();
  const day = date.getDate();
  const month = "0" + (date.getMonth() + 1);
  date = day + "/" + month;

  localStorage.setItem("date", date);
};

const uncheckInputs = () => {
  if (localStorage.getItem("date") != null) {
    const dateSplit = localStorage.getItem("date").split("/");

    if (day > dateSplit[0] || month > dateSplit[1]) {
      checkboxes2 = [...main.querySelectorAll('input[type="checkbox"]')];

      checkboxes2.forEach((checkbox) => {
        checkbox.checked = false;
      });
    }
  }
};

window.addEventListener("load", dailyReset);
setInterval(dailyReset, 3000);