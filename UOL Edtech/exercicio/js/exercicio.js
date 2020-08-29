const option = document.getElementById("option");
const button = document.getElementById("botao");

const positivo = document.getElementById("feedbackPositivo");
const negativo = document.getElementById("feedbackNegativo");

const checkboxes = option.querySelectorAll("input[type='checkbox']");

let selectedName = "";

checkboxes.forEach((checkbox) => {
  checkbox.onclick = function () {
    selectedName = checkbox.checked ? checkbox.name : "";

    checkboxes.forEach((element) => {
      if (element.name !== selectedName) {
        element.checked = false;
      }
    });

    if (selectedName) {
      button.classList.add("show");
      console.log("deu certo")
    } else {
      button.classList.remove("show");
    }
  };
});

