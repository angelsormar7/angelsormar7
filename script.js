// script.js
function moveButton() {
  const noButton = document.getElementById('noButton');
  const container = document.querySelector('.container');

  const containerRect = container.getBoundingClientRect();
  const buttonRect = noButton.getBoundingClientRect();

  const newLeft = Math.random() * (containerRect.width - buttonRect.width);
  const newTop = Math.random() * (containerRect.height - buttonRect.height);

  noButton.style.position = 'absolute';
  noButton.style.left = `${newLeft}px`;
  noButton.style.top = `${newTop}px`;
}