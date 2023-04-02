const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random()*colors.length);
  // math.random selects between 0 & 1 
  // -> multiplying by colors.length allows values from 0 to 4 
  // -> math.floor strips the decimals and leave a whole number to access the array.
}