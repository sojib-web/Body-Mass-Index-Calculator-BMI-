// @ts-nocheck
const btnEl = document.getElementById("btn");
// const weightEl = document.getElementById("weight");
// const heightEl = document.getElementById("height");
const bmiResult = document.getElementById("bmi-result");
const weightCondition = document.getElementById("weight-condition");

const calculateBMI = () => {
  const weightEl = document.getElementById("weight").value / 100;
  const heightEl = document.getElementById("height").value;
  //   console.log(heightEl, weightEl);
  const BMIValue = weightEl / (heightEl * heightEl).toFixed(2);
  bmiResult.value = BMIValue;

  if (weightEl > 0 && heightEl > 0) {
    const bmi = (weightEl / (heightEl * heightEl)).toFixed(2);
    let status;

    if (BMIValue < 18.5) {
      status = "Underweight";
    } else if (BMIValue >= 18.5 && BMIValue < 24.9) {
      status = "Normal weight";
    } else if (BMIValue >= 25 && BMIValue < 29.9) {
      status = "Overweight";
    } else {
      status = "Obesity";
    }

    weightCondition.textContent = `Your BMI is ${BMIValue} (${status}).`;
  } else {
    weightCondition.textContent =
      "Please enter valid values for weight and height.";
  }
};

calculateBMI();
btnEl.addEventListener("click", calculateBMI);
