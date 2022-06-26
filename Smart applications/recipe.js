const foodsForNow = ["Smoothie ", "Lemon rice", "Maggie", "Pasta"];
const colors = ["green", "blue", "rgba(133,122,200)", "#f15025"];

const ingrediants = [
  "1. Frozen your choice veges or fruit 2. Milk of your choice 3. Blend ",
  "1. Left-over rice 2. Oil 3. Cumin Seeds 4.green chilli 5.lemon",
  "1. Maggie Noodles 2. Maggie Spice 3. Wate",
  "1. Pasta of your choice 2. Water 3. salt 4. Tomato Sauce 5. cheese",
];

const btn = document.getElementById("btn");
const food = document.querySelector(".food", ".color");
const ingrediant = document.querySelector(".Ingrediants");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);
  const randomColor = getRandomColor();
  food.textContent = foodsForNow[randomNumber];
  document.body.style.backgroundColor = colors[randomColor];
  if (randomNumber == 0) {
    ingrediant.textContent = ingrediants[0];
  } else if (randomNumber == 1) {
    ingrediant.textContent = ingrediants[1];
  } else if (randomNumber == 2) {
    ingrediant.textContent = ingrediants[2];
  } else if (randomNumber == 3) {
    ingrediant.textContent = ingrediants[3];
  }
});

function getRandomNumber() {
  return Math.floor(Math.random() * foodsForNow.length);
}

function getRandomColor() {
  return Math.floor(Math.random() * colors.length);
}
