let checkboxes2 = [...main.querySelectorAll('input[type="checkbox"]')];

console.log("oi");

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
  console.log(day + "/" + month);
};

const uncheckInputs = () => {
  if (localStorage.getItem("date") != null) {
    const dateSplit = localStorage.getItem("date").split("/");

    if (day > dateSplit[0] || month > dateSplit[1]) {
      checkboxes2 = [...main.querySelectorAll('input[type="checkbox"]')];

      checkboxes2.forEach((checkbox) => {
        console.log(checkbox.checked);
        checkbox.checked = false;
      });
    }
  }
};

setInterval(dailyReset, 5000);
