/*       function come() {
        const buttonCome = document.querySelector(".Js-coming");

        if (buttonCome.innerHTML === "Come") {
          buttonCome.innerHTML = "Coming";
        } else {
          buttonCome.innerHTML = "Come";
        }
      } */

String(23);
console.log("25" - 5);
console.log(Number("25") + 5);

function handelCostKeydown(event) {
  if (event.key === "Enter") {
    calculateTotal();
  }
}

function calculateTotal() {
  const inputEl = document.querySelector(".Js-input");
  let cost = Number(inputEl.value);
  //console.log(cost);

  if (cost < 40) {
    cost += 10;
    //console.log(cost);
    //console.log(typeof cost);
  }

  document.querySelector(".Js-output").innerHTML = `$${Math.floor(cost)}`;
}

function subscribe() {
  const buttonEl = document.querySelector(".Js-suscribe-btn");

  if (buttonEl.innerHTML === "Subscribe") {
    document.querySelector(".Js-suscribe-btn").innerHTML = "Subscribed";
  } else {
    document.querySelector(".Js-suscribe-btn").innerHTML = "Subscribe";
  }
}
