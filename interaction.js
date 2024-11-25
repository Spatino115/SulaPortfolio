const cursor = document.getElementById("custom-cursor");

document.addEventListener("mousemove", (event) => {
  cursor.style.left = event.clientX - 15 + "px";
  cursor.style.top = event.clientY - 15 + "px";
});
