const container = document.getElementById('container');

const redText = document.createElement('p');
redText.textContent = "Hey! I'm red!";
container.appendChild(redText);

const blueText = document.createElement('h3');
blueText.textContent = "I'm a blue h3!";
container.appendChild(blueText);

// main div
const container2 = document.createElement('div');

// children
const heading1 = document.createElement('h1');
heading1.textContent = "I'm in a div!";

const para = document.createElement('p');
para.textContent = "ME TOO!";

// add children to div
container2.append(heading1);
container2.append(para);

// add container2 to main container
container.appendChild(container2);

// button click
// const btn = document.querySelector('#btn');
// btn.onclick = () => alert('Hello World');

// button click 2
const btn = document.querySelector('#btn');
btn.addEventListener("click", () => {
    alert('Hello World');
});





