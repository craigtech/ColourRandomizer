const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
  let hexColor = '#';
  for(let i=0; i<6; i++) {
    hexColor += hex[getRandomNumber()]
  }
  document.body.style.backgroundColor = hexColor;;
  color.textContent = hexColor;
});

function getHexNumber() {
  return Math.floor(Math.random()*hex.length);
  // math.random selects between 0 & 1 
  // -> multiplying by hex.length allows values from 0 to 15 
  // -> math.floor strips the decimals and leave a whole number to access the array.
}