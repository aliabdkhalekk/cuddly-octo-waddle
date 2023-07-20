document.addEventListener('DOMContentLoaded', function () {
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const content1 = document.getElementById('content1');
const content2 = document.getElementById('content2');
const content3 = document.getElementById('content3');

button1.addEventListener('click', () => {
  content1.classList.add('active');
  content2.classList.remove('active');
  content3.classList.remove('active');
});

button2.addEventListener('click', () => {
  content1.classList.remove('active');
  content2.classList.add('active');
  content3.classList.remove('active');
});

button3.addEventListener('click', () => {
  content1.classList.remove('active');
  content2.classList.remove('active');
  content3.classList.add('active');
});
});