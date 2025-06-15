const BASE_URL = "https://v6.exchangerate-api.com/v6/1d7d4b3de70cafecb8750e04/latest";

const dropdowns = document.querySelectorAll('.dropdown select')
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select")
const toCurr = document.querySelector(".to select")
const msg = document.querySelector(".msg");
const swapbtn = document.querySelector("#swapbtn");

for (let select of dropdowns) {
    for (let code in countryList) {
        let newOption = document.createElement("option");
        // newOption.innerHTML = `<option value="${code}">${code}</option>`;
        newOption.innerText = code;
        newOption.value = code;
        if (select.name === "from" && code == "USD") newOption.selected = "selected";
        else if (select.name === "to" && code == "INR") newOption.selected = "selected";
        select.appendChild(newOption);
    }
    // whenever select changes
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    })
}

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if(amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = 1;
    }
    const fromURL = `${BASE_URL}/${fromCurr.value.toLowerCase()}`;
    let response = await fetch(fromURL);
    let data = await response.json();
    let rate = data.conversion_rates[toCurr.value];
    let finalAmount = amtVal * rate;
    finalAmount = Math.round(finalAmount*100000)/100000;
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
}

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
})

window.addEventListener("load", () => {
    updateExchangeRate();
})

const swap = () => {
    let temp = fromCurr.value;
    fromCurr.value = toCurr.value;
    toCurr.value = temp;
    updateFlag(fromCurr);
    updateFlag(toCurr);
}

swapbtn.addEventListener("click", swap);

