// @ts-nocheck
// // @ts-nocheck
// const btnEl = document.getElementById("btn");
// // const weightEl = document.getElementById("weight");
// // const heightEl = document.getElementById("height");
// const bmiResult = document.getElementById("bmi-result");
// const weightCondition = document.getElementById("weight-condition");

// const calculateBMI = () => {
//   const weightEl = document.getElementById("weight").value / 100;
//   const heightEl = document.getElementById("height").value;
//   //   console.log(heightEl, weightEl);
//   const BMIValue = weightEl / (heightEl * heightEl).toFixed(2);
//   bmiResult.value = BMIValue;

//   if (weightEl > 0 && heightEl > 0) {
//     const bmi = (weightEl / (heightEl * heightEl)).toFixed(2);
//     let status;

//     if (BMIValue < 18.5) {
//       status = "Underweight";
//     } else if (BMIValue >= 18.5 && BMIValue < 24.9) {
//       status = "Normal weight";
//     } else if (BMIValue >= 25 && BMIValue < 29.9) {
//       status = "Overweight";
//     } else {
//       status = "Obesity";
//     }

//     weightCondition.textContent = `Your BMI is ${BMIValue} (${status}).`;
//   } else {
//     weightCondition.textContent =
//       "Please enter valid values for weight and height.";
//   }
// };

// calculateBMI();
// btnEl.addEventListener("click", calculateBMI);

// <!-- update BMI CALCULATOR -->

let heightEl = document.getElementById("height");
let weightEl = document.getElementById("weight");
let buttonEl = document.getElementById("button");
let scoreEl = document.getElementById("score");
let resultEl = document.getElementById("result");
let formtEl = document.getElementById("form");

buttonEl.addEventListener("click", () => {
  let newHeight = parseFloat(heightEl.value);
  let newWeight = parseFloat(weightEl.value);

  newHeight = newHeight / 100;
  let sqrHeight = newHeight * newHeight;
  // console.log(newHeight * newWeight);
  // console.log(typeof newHeight);
  let BMI = newWeight / sqrHeight;
  // console.log(BMI.toFixed(2));
  scoreEl.textContent = BMI.toFixed(2);
  resultEl.style.display = "block";

  if (scoreEl.textContent < 18.6) {
    scoreEl.style.backgroundColor = "#ffeaa7";
  } else if (scoreEl.textContent < 24.5) {
    scoreEl.style.backgroundColor = "#55efc4";
  } else {
    scoreEl.style.backgroundColor = "#d63031";
  }
});

formtEl.addEventListener("submit", (e) => {
  e.preventDefault();
});
