document.getElementById("leadForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const data = {
      nombre: this.nombre.value,
      email: this.email.value,
      telefono: this.telefono.value,
      mensaje: this.mensaje.value,
    };
  
    fetch("https://hook.make.com/TU_WEBHOOK_AQUI", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {
      this.style.display = "none";
      document.querySelector(".mensaje-exito").style.display = "block";
    });
  });
  