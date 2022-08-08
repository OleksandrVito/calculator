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
    let sum = (
      (efficiencyInput.value / 100) *
      distanceInput.value *
      priceInput.value
    ).toFixed(2);

    let value = ((efficiencyInput.value / 100) * distanceInput.value).toFixed(
      3
    );
    if (sum) {
      resultInput.textContent = `Сума витрат: ${sum} грн. \n
        Кількість пального: ${value} л.`;
    }
  }
}
fuelCalc();
