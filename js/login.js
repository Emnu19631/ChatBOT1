document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const remember = document.querySelector(".options input[type='checkbox']").checked;

 
  if (email === 'usuario@ejemplo.com' && password === 'contraseña123') {
    if (remember) {
      localStorage.setItem("rememberedEmail", email);
    } else {
      localStorage.removeItem("rememberedEmail");
    }
    alert("Acceso permitido");
    window.location.href = "../pages/main.html";
  } else {
    alert("Correo o contraseña incorrectos");
  }
});

// Precargar el valor si existe
window.addEventListener("load", function () {
  const savedEmail = localStorage.getItem("rememberedEmail");
  if (savedEmail) {
    document.getElementById("email").value = savedEmail;
  }
});
