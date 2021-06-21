// Write your code here!
const main = document.getElementById('main');

main.remove();

const h1 = document.createElement('h1');

h1.id = "victory";

const newHeader = h1;

document.body.appendChild(newHeader);

newHeader.innerHTML = "YOUR-NAME is the champion";