document.addEventListener('DOMContentLoaded', function() {
  const yesButton = document.getElementById('yesButton');
  const noButton = document.getElementById('noButton');

  // Reemplaza el contenido de la página al hacer clic en "Yes"
  yesButton.addEventListener('click', loadYesPage);

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

function loadYesPage() {
  document.head.innerHTML = `
    <link rel="stylesheet" href="./yes_style.css">
  `;

  document.body.innerHTML = `
    <div class="container">
      <div>
        <h1 class="header_text">Let&rsquo;s go!</h1>
      </div>
      <div class="gif_container">
        <img src="https://media.tenor.com/YTw87WdiaasAAAAi/tkthao219-capoo.gif" alt="Capoo GIF">
      </div>
    </div>
  `;

  // Aquí puedes agregar la función de descarga automática del PDF si la necesitas
}
