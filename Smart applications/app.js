const foodsForNow = [
  "Pumpkin and spinach patty sandwitch",
  "Lemon rice",
  "Maggie",
  "Sushi",
  "Masala Dosa",
  "Smoothie",
  "Burrito",
];
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const food = document.querySelector(".food", ".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = colors[randomColor];
  food.textContent = foodsForNow[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * foodsForNow.length);
}

function getRandomColor() {
  return Math.floor(Math.random() * colors.length);
}
