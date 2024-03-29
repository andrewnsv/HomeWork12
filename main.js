const redLight = document.querySelector(".red");
const yellowLight = document.querySelector(".yellow");
const greenLight = document.querySelector(".green");
const walkBtn = document.getElementById("walk");
const counter = document.querySelector(".counter");

let timeLeft = 10;
let currentLight = "red";
let counterTimeout;
redLight.style.backgroundColor = "red";
yellowLight.style.backgroundColor = "black";
greenLight.style.backgroundColor = "black";


let changeLight = setInterval(() => {
  if (currentLight === "red") {
    redLight.style.backgroundColor = "black";
    yellowLight.style.backgroundColor = "yellow";
    currentLight = "yellow";
  } else if (currentLight === "yellow") {
    yellowLight.style.backgroundColor = "black";
    greenLight.style.backgroundColor = "green";
    currentLight = "green";
  } else {
    greenLight.style.backgroundColor = "black";
    redLight.style.backgroundColor = "red";
    currentLight = "red";
  }
}, 5000);

walkBtn.addEventListener("click", () => {
  clearInterval(changeLight);
  
  currentLight = "red";
  redLight.style.backgroundColor = "red";
  yellowLight.style.backgroundColor = "black";
  greenLight.style.backgroundColor = "black";
  timeLeft = 10;
  walkBtn.disabled = true;
  counter.textContent = `Times left: ${timeLeft}`;

  const updateCounter = () => {
    timeLeft--;
    counter.textContent = `Times left: ${timeLeft}`;
    if (timeLeft === 0) {
      walkBtn.disabled = false;
      changeLight = setInterval(() => {
        if (currentLight === "red") {
          redLight.style.backgroundColor = "black";
          yellowLight.style.backgroundColor = "yellow";
          currentLight = "yellow";
        } else if (currentLight === "yellow") {
          yellowLight.style.backgroundColor = "black";
          greenLight.style.backgroundColor = "green";
          currentLight = "green";
        } else {
          greenLight.style.backgroundColor = "black";
          redLight.style.backgroundColor = "red";
          currentLight = "red";
        }
      }, 5000);
    } else {
      clearTimeout(counterTimeout);
      counterTimeout = setTimeout(updateCounter, 1000);
    }
  };
  clearTimeout(counterTimeout);
  counterTimeout = setTimeout(updateCounter, 1000);
});