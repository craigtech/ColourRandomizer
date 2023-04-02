const colors = ["green", "red", "blue", "yellow"];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const nav_sim_btn = document.getElementById('nav-sim-btn');
const nav_hex_btn = document.getElementById('nav-hex-btn');
const btn = document.getElementById('btn');
const color = document.querySelector(".color");
let mode = true

nav_sim_btn.addEventListener('click', function(){
  mode = true
});

nav_hex_btn.addEventListener('click', function(){
  mode = false
});

btn.addEventListener('click', function(){
  if (mode) {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
  }
  else {
    let hexColor = '#';
    for(let i=0; i<6; i++) {
      hexColor += hex[getHexNumber()]
    }
    document.body.style.backgroundColor = hexColor;;
    color.textContent = hexColor;
  }  
});

function getRandomNumber() {
  return Math.floor(Math.random()*colors.length);
  // math.random selects between 0 & 1 
  // -> multiplying by colors.length allows values from 0 to 4 
  // -> math.floor strips the decimals and leave a whole number to access the array.
}

function getHexNumber() {
  return Math.floor(Math.random()*hex.length);
}