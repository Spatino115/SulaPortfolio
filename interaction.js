const cursor = document.getElementById('custom-cursor');

document.addEventListener('mousemove', (event) => {
  cursor.style.left = event.clientX - cursor.offsetWidth / 2 + 'px';
  cursor.style.top = event.clientY - cursor.offsetHeight / 2 + 'px';
});
