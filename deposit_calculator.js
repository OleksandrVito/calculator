// Депозитний калькулятор
function depositCalc() {
  const sumInput = document.querySelector("#sum");
  const rateInput = document.querySelector("#rate");
  const termInput = document.querySelector("#term");
  const sureplenishmentmInput = document.querySelector("#replenishment");
  const resultOutnput = document.querySelector("#result");
  const capYes = document.querySelector("#capYes");
  const capNo = document.querySelector("#capNo");

  sumInput.addEventListener("input", calc);
  rateInput.addEventListener("input", calc);
  termInput.addEventListener("input", calc);
  sureplenishmentmInput.addEventListener("input", calc);
  capYes.addEventListener("input", calc);
  capNo.addEventListener("input", calc);

  function calc() {
    let ratePerMonth = rateInput.value / 100 / 12;
    let sum = +sumInput.value;
    let profit = 0;

    for (let i = 1; i < termInput.value; i++) {
      sum += +sureplenishmentmInput.value;
    }

    if (capYes.checked) {
      for (let i = 0; i < termInput.value; i++) {
        let profitPerMonth = sum * ratePerMonth - sum * ratePerMonth * 0.195;
        sum += profitPerMonth;
        profit += profitPerMonth;
      }
    } else if (capNo.checked) {
      for (let i = 0; i < termInput.value; i++) {
        let profitPerMonth = sum * ratePerMonth - sum * ratePerMonth * 0.195;
        profit += profitPerMonth;
      }
      sum += profit;
    }

    let resSum = function numberWithSpaces(x) {
      var parts = x.toFixed(2).toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      return parts.join(".");
    };
    let resProfit = function numberWithSpaces(x) {
      var parts = x.toFixed(2).toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      return parts.join(".");
    };

    // console.log(profit);
    resultOutnput.textContent = `Ваші дохід після сплати податків: ${resProfit(
      profit
    )} грн. Ваші накопичення: ${resSum(sum)} грн.`;
  }
}

depositCalc();
