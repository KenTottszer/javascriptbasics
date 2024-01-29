const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const content2 = document.createElement('p');
content2.classList.add('content2');
content2.textContent = 'Hey! I am Red.';
content2.style.color = 'red';

const content3 = document.createElement('h3');
content3.classList.add('content3');
content3.textContent = 'I am blue h3!';
content3.style.color = 'blue';

container.appendChild(content);
container.appendChild(content2);
container.appendChild(content3);

const  container2 = document.querySelector('#container2');

const content4 = document.createElement('div');
content4.classList.add('content4');
content4.style.backgroundColor = 'pink';
content4.style.borderColor = 'black';
content4.style.borderStyle = 'solid'; 

const content5 = document.createElement('h1');
content5.classList.add('content5');
content5.textContent = 'I a h1 in a div!';

const content6 = document.createElement('p');
content6.classList.add('content6');
content6.textContent = 'ME TOO';



container2.appendChild(content4);
content4.appendChild(content5);
content4.appendChild(content6);

// const btn1 = document.querySelector('#btn1');
// btn1.onclick = () => alert("Hello World");

// const btn = document.querySelector('#btn');
// btn.addEventListener('click', () => {
//   alert("Hello World");
// });

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });