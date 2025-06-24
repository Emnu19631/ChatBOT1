function confirmarSalida(event) {
  event.preventDefault();
  const confirmacion = confirm("¿Seguro que quieres salir?");
  if (confirmacion) {
    window.location.href = "../pages/login.html";
  }
}
