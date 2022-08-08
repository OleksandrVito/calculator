// Конвертер валют
function currencyConvert() {
  const select = document.querySelectorAll("select");
  const info = document.querySelector(".info");
  const fromCurrencyInput = document.querySelector("#fromCurrency");
  const tourrencyInput = document.querySelector("#toCurrency");

  fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
    .then((data) => data.json())
    .then((res) => {
      console.log(res);
      res.push({
        rate: 1,
        cc: "UAH",
        txt: "Гривня",
      });
      res.sort((a, b) => {
        let currencyA = a.txt.toLowerCase();
        let currencyB = b.txt.toLowerCase();
        if (currencyA < currencyB) {
          return -1;
        }
        if (currencyA > currencyB) {
          return 1;
        }
        return 0;
      });
      info.textContent = `* згідно курсу НБУ станом на ${res[0].exchangedate}`;
      res.forEach((element) => {
        let option = document.createElement("option");
        let optionCopy = document.createElement("option");
        option.textContent = `${element.cc} ${element.txt}`;
        optionCopy.textContent = `${element.cc} ${element.txt}`;
        option.value = element.rate;
        optionCopy.value = element.rate;
        select[0].append(option);
        select[1].append(optionCopy);
      });
    })
    .then(() => calc());

  function calc() {
    let firstSum = fromCurrencyInput.value;
    let rateFirstCurrency = select[0].value;
    let rateSecondCurrency = select[1].value;

    fromCurrencyInput.addEventListener("input", () => {
      firstSum = fromCurrencyInput.value;
      tourrencyInput.value = (
        (firstSum * rateFirstCurrency) /
        rateSecondCurrency
      ).toFixed(2);
    });
    select[0].addEventListener("change", () => {
      rateFirstCurrency = select[0].value;
      tourrencyInput.value = (
        (firstSum * rateFirstCurrency) /
        rateSecondCurrency
      ).toFixed(2);
    });
    select[1].addEventListener("change", () => {
      rateSecondCurrency = select[1].value;
      tourrencyInput.value = (
        (firstSum * rateFirstCurrency) /
        rateSecondCurrency
      ).toFixed(2);
    });
  }
}

currencyConvert();
const myHeaders = new Headers();

const myInit = {
  method: "GET",
  // headers: myHeaders,
  mode: "no-cors",
  // cache: "default",
};

fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json")
  .then((blob) => blob.json())
  .then((data) => {
    console.table(data);
    return data;
  })
  .catch((e) => {
    console.log(e);
    return e;
  });
