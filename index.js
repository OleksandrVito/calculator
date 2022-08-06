// Калькулятор витрат палива
function fuelCalc() {
  const distanceInput = document.querySelector("#distance");
  const efficiencyInput = document.querySelector("#efficiency");
  const priceInput = document.querySelector("#price");
  const resultInput = document.querySelector("#result");

  distanceInput.addEventListener("input", calc);
  efficiencyInput.addEventListener("input", calc);
  priceInput.addEventListener("input", calc);

  function calc() {
    let sum = Math.floor(
      (efficiencyInput.value / 100) * distanceInput.value * priceInput.value
    );

    let value = Math.floor((efficiencyInput.value / 100) * distanceInput.value);
    if (sum) {
      resultInput.textContent = `Сума витрат: ${sum} грн \n
        Кількість пального: ${value} л.`;
    }
  }
}
fuelCalc();
// Депозитний калькулятор
function depoditCalc() {
  const sumInput = document.querySelector("#sum");
  const rateInput = document.querySelector("#rate");
  const dateInput = document.querySelector("#date");
  const termInput = document.querySelector("#term");
  const sureplenishmentmInput = document.querySelector("#replenishment");
  const resultInput = document.querySelector("#result");

  sumInput.addEventListener("input", calc);
  rateInput.addEventListener("input", calc);
  termInput.addEventListener("input", calc);

  function calc() {
    let sum = Math.floor(
      sumInput.value * (rateInput.value / 12 / 100) * termInput.value -
        sumInput.value * (rateInput.value / 12 / 100) * termInput.value * 0.195
    );

    if (sum) {
      result.textContent = `Сума відсотків: ${sum} грн`;
    }
  }
}

// depoditCalc();
// fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json")
//   .then((data) => data.json())
//   .then((res) => console.log(res));
