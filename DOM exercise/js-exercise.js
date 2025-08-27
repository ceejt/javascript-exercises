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

// btn.addEventListener("click", () => {
//     alert('Hello World');
// });

function alertFunction() {
  alert("YAY! YOU DID IT!");
}

// btn.addEventListener("click", alertFunction);

btn.addEventListener("click", function (e) {
  console.log(e.target);
});

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
