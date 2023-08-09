const counter = document.querySelector('.counter')
const increaseButton = document.querySelector('.increase-btn');
const decreaseButton = document.querySelector('.decrease-btn');

let count = 0;
const max = 10;


const increase = () => {
  if (count >= max) return;
  count += 1;
  counter.innerText = count;
};

const decrease = () => {
  if (count <= 0) return;
  count -= 1;
  counter.innerText = count;
};
  
  increaseButton.addEventListener('click', increase);
  decreaseButton.addEventListener('click', decrease);
