// script.js
document.addEventListener('DOMContentLoaded', function() {
  const yesButton = document.getElementById('yesButton');
  const noButton = document.getElementById('noButton');

  // Redirige a otra página de GitHub al hacer clic en el botón "Yes"
  yesButton.addEventListener('click', nextPage);

  // Mueve el botón "No" cuando el cursor pasa sobre él
  noButton.addEventListener('mouseover', moveButton);
});

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

function nextPage() {
  window.location.href = 'https://github.com/'; // Reemplaza con la URL deseada
}